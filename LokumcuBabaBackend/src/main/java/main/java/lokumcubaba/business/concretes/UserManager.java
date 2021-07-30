package main.java.lokumcubaba.business.concretes;

import main.java.lokumcubaba.business.abstracts.UserService;
import main.java.lokumcubaba.core.utilities.results.Result;
import main.java.lokumcubaba.core.utilities.results.SuccessResult;
import main.java.lokumcubaba.dataAccess.UserDao;
import main.java.lokumcubaba.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserManager implements UserService {

    private UserDao userDao;

    @Autowired
    public UserManager(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public Result add(User user) {

        userDao.save(user);
        return new SuccessResult("Kullanıcı başarıyla eklendi");
    }
}
