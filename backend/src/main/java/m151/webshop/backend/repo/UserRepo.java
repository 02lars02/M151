package m151.webshop.backend.repo;

import m151.webshop.backend.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends PagingAndSortingRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}