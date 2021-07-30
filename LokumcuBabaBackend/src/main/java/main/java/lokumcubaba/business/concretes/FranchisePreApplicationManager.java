package main.java.lokumcubaba.business.concretes;

import main.java.lokumcubaba.business.abstracts.FranchisePreApplicationService;
import main.java.lokumcubaba.core.utilities.results.DataResult;
import main.java.lokumcubaba.core.utilities.results.Result;
import main.java.lokumcubaba.core.utilities.results.SuccessDataResult;
import main.java.lokumcubaba.core.utilities.results.SuccessResult;
import main.java.lokumcubaba.dataAccess.FranchisePreApplicationDao;
import main.java.lokumcubaba.entities.FranchisePreApplication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FranchisePreApplicationManager implements FranchisePreApplicationService {

    private FranchisePreApplicationDao franchisePreApplicationDao;

    public FranchisePreApplicationManager(FranchisePreApplicationDao franchisePreApplicationDao) {
        this.franchisePreApplicationDao = franchisePreApplicationDao;
    }

    @Override
    public Result add(FranchisePreApplication franchisePreApplication) {

        franchisePreApplicationDao.save(franchisePreApplication);
        return new SuccessResult("Ön bayilik başvurusu başarıyla gerçekleştirildi");
    }

    @Override
    public DataResult<List<FranchisePreApplication>> getAll() {

        return new SuccessDataResult<>
                (franchisePreApplicationDao.findAll());
    }
}
