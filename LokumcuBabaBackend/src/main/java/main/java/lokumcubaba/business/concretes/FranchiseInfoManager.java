package main.java.lokumcubaba.business.concretes;

import main.java.lokumcubaba.business.abstracts.FranchiseInfoService;
import main.java.lokumcubaba.core.utilities.results.Result;
import main.java.lokumcubaba.core.utilities.results.SuccessResult;
import main.java.lokumcubaba.dataAccess.FranchiseInfoDao;
import main.java.lokumcubaba.entities.FranchiseInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FranchiseInfoManager implements FranchiseInfoService {

    private final FranchiseInfoDao franchiseInfoDao;

    @Autowired
    public FranchiseInfoManager(FranchiseInfoDao franchiseInfoDao) {
        this.franchiseInfoDao = franchiseInfoDao;
    }

    @Override
    public Result add(FranchiseInfo franchiseInfo) {

        franchiseInfoDao.save(franchiseInfo);
        return new SuccessResult("Bayilik bilgileri başarıyla eklendi");
    }
}
