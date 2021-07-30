package main.java.lokumcubaba.dataAccess;

import main.java.lokumcubaba.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Integer> {

}
