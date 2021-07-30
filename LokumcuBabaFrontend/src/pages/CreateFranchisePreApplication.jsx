import Axios from 'axios'
import React, { Component } from 'react'
import { Form, Header, Grid, Segment } from 'semantic-ui-react'
import { DateInput } from 'semantic-ui-calendar-react';

class CreateFranchisePreApplication extends Component {

    state = {
        nameSurname: "", identity: "", address: "", phoneNumber: "", email: "", birthday: "",
        didRetailTrade: false, explanation: "", city: "", budget: "", ınAddition: "",
        submittedNameSurname: "", submittedIdentity: "", submittedAdress: "",
        submittedPhoneNumber: "", submittedEmail: "", submittedDidRetailTrade: false,
        submittedExplanation: "", submittedCity: "", submittedBudget: "", submittedInAddition: "",
        identityError: false, formError: false, nameSurnameError: false, adressError: false,
        phoneNumberError: false, emailError: false, birthdayError: false,
        explanationError: false, budgetError: false, cityError: false, isSucces: false
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleCheckClick = () => {

        this.setState((prevState) => ({
            ...prevState,
            didRetailTrade: !this.state.didRetailTrade
        }));
    };

    handleSubmit = () => {
        const { nameSurname, identity, address, phoneNumber,
            email, didRetailTrade, explanation, city,
            budget, ınAddition, birthday } = this.state

        this.setState({
            submittedNameSurname: nameSurname, submittedIdentity: identity,
            submittedAdress: address, submittedPhoneNumber: phoneNumber, submittedEmail: email,
            submittedDidRetailTrade: didRetailTrade, submittedExplanation: explanation,
            submittedCity: city, submittedBudget: budget, submittedInAddition: ınAddition,
            submittedBirthday: birthday
        })

        //Form yenilendiğinde hataların kaldırılmasını sağlar
        let error = false;
        this.setState({ identityError: false })
        this.setState({ nameSurnameError: false });
        this.setState({ adressError: false });
        this.setState({ phoneNumberError: false });
        this.setState({ emailError: false });
        this.setState({ birthdayError: false });
        this.setState({ explanationError: false });
        this.setState({ budgetError: false });
        this.setState({ cityError: false });

        //Form elemanları validation kontrolleri
        if (!Number.isInteger(this.state.identity * 1) || this.state.identity.length !== 11) {
            this.setState({ identityError: true });
            error = true;
        }

        if (this.state.nameSurname === null || this.state.nameSurname.match(/^\s*$/)) {
            this.setState({ nameSurnameError: true });
            error = true;
        }

        if (this.state.address.length < 14) {
            this.setState({ adressError: true });
            error = true;
        }

        if (this.state.phoneNumber.length !== 10 || this.state.phoneNumber[0] === 0) {
            this.setState({ phoneNumberError: true });
            error = true;
        }

        var regx = /\S+@\S+\.\S+/;
        if (!this.state.email.match(regx)) {
            this.setState({ emailError: true });
            error = true;
        }

        if (this.state.birthday.length === 0) {
            this.setState({ birthdayError: true });
            error = true;
        }

        if (this.state.explanation.length < 19) {
            this.setState({ explanationError: true });
            error = true;
        }

        if (this.state.city === null || this.state.city.match(/^\s*$/)) {
            this.setState({ cityError: true });
            error = true;
        }

        if (this.state.budget === null || this.state.budget.match(/^\s*$/)) {
            this.setState({ budgetError: true });
            error = true;
        }

        if (error) {
            this.setState({ formError: true });
            return;
        }
        this.setState({ formError: false });

        //birthday değerinin java tarafındaki localdate veritipine uygun hale getirilmesi
        var date = birthday;
        var formattedBirthdate = date.split("-").reverse().join("-");

        Axios.post("http://localhost:8080/api/franchisepreapplication/add", {

            franchiseInfo: {
                budget: budget, city: city, didRetailTrade: didRetailTrade,
                explanation: explanation, inAddition: ınAddition
            },

            user: {
                nameSurname: nameSurname, address: address,
                phoneNumber: phoneNumber, birthday: formattedBirthdate, email: email, nationalityId: identity
            }
        }
        ).then(function (response) {
            //const status = response.status;
            //isSucces = false;
            if (response.status === 200) {

                window.location.reload(false);
                alert('Başarıyla kayıt oldunuz');
            }
        }).catch(error => {
            console.log(error)
        })

    }

    render() {

        const { nameSurname, identity, address, phoneNumber, email,
            didRetailTrade, explanation, city, budget, ınAddition, birthday,
        } = this.state

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='center'>
                        <Grid.Column style={{ maxWidth: 600 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                BAYİLİK ÖN BAŞVURU FORMU
                            </Header>

                            <Segment>
                                <Form.Input
                                    label="İSİM SOYİSİM:"
                                    placeholder='İSİM SOYİSİM'
                                    name="nameSurname"
                                    value={nameSurname}
                                    onChange={this.handleChange}
                                    error={this.state.nameSurnameError ? {
                                        content: 'Lütfen gerçek bir isim giriniz'
                                    } : false}
                                />
                                <Form.Input
                                    label="TC KİMLİK:"
                                    placeholder='TC KİMLİK'
                                    maxLength="11"
                                    name="identity"
                                    value={identity}
                                    onChange={this.handleChange}
                                    error={this.state.identityError ? {
                                        content: '11 haneli geçerli bir tc kimlik numarası giriniz'
                                    } : false}
                                />
                                <Form.Input
                                    label="ADRES:"
                                    labelPosition="left"
                                    placeholder='ADRES'
                                    name="address"
                                    value={address}
                                    onChange={this.handleChange}
                                    error={this.state.adressError ? {
                                        content: 'Lütfen daha detaylı bir adres yazınız'
                                    } : false}
                                />
                                <Form.Input
                                    label="TELEFON:"
                                    placeholder='TELEFON'
                                    maxLength="10"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={this.handleChange}
                                    error={this.state.phoneNumberError ? {
                                        content: 'Lütfen başında sıfır olmadan 10 karakterli bir telefon numarası giriniz'
                                    } : false}
                                />
                                <Form.Input
                                    label="E-POSTA:"
                                    placeholder='E-POSTA'
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    error={this.state.emailError ? {
                                        content: 'Lütfen geçerli bir e-posta giriniz'
                                    } : false}
                                />

                                <DateInput
                                    name="birthday"
                                    label="DOĞUM TARİHİ"
                                    placeholder="Doğum tarihi"
                                    value={birthday}
                                    iconPosition="left"
                                    onChange={this.handleChange}
                                    error={this.state.birthdayError ? {
                                        content: 'Lütfen bir doğum tarihi seçiniz'
                                    } : false}
                                />

                                
                                <Form.Checkbox
                                    name="didRetailTrade"
                                    // value={didRetailTrade}
                                    checked={didRetailTrade}
                                    onChange={(e) => this.handleCheckClick(e)}
                                    label="PERAKENDE TİCARETİ İLE UĞRAŞTINIZ MI?"
                                    id="deneme"
                                />

                                <Form.Input
                                    label="LOKUMCU BABA’YI TERCİH ETMENİZİN SEBEBİ NEDİR?"
                                    placeholder='LOKUMCU BABA’YI TERCİH SEBEBİNİZ'
                                    name="explanation"
                                    value={explanation}
                                    onChange={this.handleChange}
                                    error={this.state.explanationError ? {
                                        content: 'Lütfen daha çok detay veriniz'
                                    } : false}
                                />

                                <Form.Input
                                    label="HANGİ İL/İLÇE/SEMT İÇİN LOKUMCU BABA İŞLETMECİLİĞİ
                                        DÜŞÜNÜYORSUNUZ?"
                                    placeholder='BAYİLİK ALACAĞINIZ YER'
                                    name="city"
                                    value={city}
                                    onChange={this.handleChange}
                                    error={this.state.cityError ? {
                                        content: 'Lütfen bu alanı boş geçmeyiniz'
                                    } : false}
                                />
                                <Form.Input
                                    label="YATIRIM MİKTARINIZ NEDİR?"
                                    placeholder='YATIRIM MİKTARINIZ'
                                    name="budget"
                                    value={budget}
                                    onChange={this.handleChange}
                                    error={this.state.budgetError ? {
                                        content: 'Lütfen bu alanı boş geçmeyiniz'
                                    } : false}
                                />
                                <Form.Input
                                    label="EKLEMEK İSTEDİKLERİNİZ:"
                                    placeholder='EKLEMEK İSTEDİKLERİNİZ'
                                    name="ınAddition"
                                    value={ınAddition}
                                    onChange={this.handleChange}
                                />
                                <Form.Button content='Başvur' />
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Form>
            </div>
        )
    }
}

export default CreateFranchisePreApplication