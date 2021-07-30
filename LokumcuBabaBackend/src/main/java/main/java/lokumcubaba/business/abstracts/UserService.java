package main.java.lokumcubaba.business.abstracts;

import main.java.lokumcubaba.core.utilities.results.Result;
import main.java.lokumcubaba.entities.User;

public interface UserService {

    Result add(User user);
}
