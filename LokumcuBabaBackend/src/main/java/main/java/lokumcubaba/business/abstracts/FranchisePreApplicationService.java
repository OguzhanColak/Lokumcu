package main.java.lokumcubaba.business.abstracts;

import main.java.lokumcubaba.core.utilities.results.DataResult;
import main.java.lokumcubaba.core.utilities.results.Result;
import main.java.lokumcubaba.entities.FranchisePreApplication;

import java.util.List;

public interface FranchisePreApplicationService {

    Result add(FranchisePreApplication franchisePreApplication);
    DataResult<List<FranchisePreApplication>> getAll();
}
