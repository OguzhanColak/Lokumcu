package main.java.lokumcubaba.dataAccess;

import main.java.lokumcubaba.entities.FranchiseInfo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FranchiseInfoDao  extends JpaRepository<FranchiseInfo,Integer> {

}