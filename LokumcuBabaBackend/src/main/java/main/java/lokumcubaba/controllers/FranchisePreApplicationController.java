package main.java.lokumcubaba.controllers;

import main.java.lokumcubaba.business.abstracts.FranchisePreApplicationService;
import main.java.lokumcubaba.core.utilities.results.DataResult;
import main.java.lokumcubaba.core.utilities.results.Result;
import main.java.lokumcubaba.entities.FranchisePreApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/franchisepreapplication")
@CrossOrigin
public class FranchisePreApplicationController {

    private FranchisePreApplicationService franchisePreApplicationService;

    @Autowired
    public FranchisePreApplicationController(FranchisePreApplicationService franchisePreApplicationService) {
        this.franchisePreApplicationService = franchisePreApplicationService;
    }


    @PostMapping(value="/add")
    public Result add(@RequestBody FranchisePreApplication franchisePreApplication) {

        return franchisePreApplicationService.add(franchisePreApplication);
    }
}
