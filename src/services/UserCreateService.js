const AppError = require("../utils/AppError");
const {hash} = require("bcryptjs");

class UserCreateService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  };
  
  async execute({name, email, password}) {
    // const userRepository = new UserRepository; // Explicit dependence

    const checkUserExists = await this.userRepository.findByEmail(email);
    // const database = await sqliteConnection();
    // const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if(checkUserExists){
      throw new AppError("This e-mail is already in use.");
    };

    const hashedPassword = await hash(password, 8);

    const userCreated = await this.userRepository.create({name, email, password: hashedPassword});
    // await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);

    return userCreated;
  };
};

module.exports = UserCreateService;