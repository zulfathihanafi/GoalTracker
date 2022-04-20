
const register2 = () => {
    return (
        <div>
            <main class="signupbox">
                <div >
                    <h1>Register</h1>
                    <h4>It's free and only takes a minute</h4>
                    <form>
                        <label>First Name</label>
                        <input type="text" placeholder="" />
                        <label>Last Name</label>
                        <input type="text" placeholder="" />
                        <label>Email</label>
                        <input type="email" placeholder="" />
                        <label>Password</label>
                        <input type="password" placeholder="" />
                        <label>Confirm Password</label>
                        <input type="password" placeholder="" />
                        <input type="button" value="Submit" />
                    </form>

                </div>
                <p class="para-2">
                    Already have an account? <a href="login.html">Login here</a>
                </p>
            </main>

            <style jsx>
                {`body {
  background-color: #344a72;
  font-family: "Roboto", sans-serif;
}

.signup-box {
  width: 360px;
  margin: auto;
  margin-top: 20px;
  background-color: white;
  border-radius: 3px;
}

h1 {
  text-align: center;
  padding-top: 15px;
}

h4 {
  text-align: center;
}

form {
  width: 300px;
  margin-left: 20px;
}

form label {
  display: flex;
  margin-top: 20px;
  font-size: 18px;
}

form input {
  width: 100%;
  padding: 7px;
  border: none;
  border: 1px solid gray;
  border-radius: 6px;
  outline: none;
}
input[type="button"] {
  width: 320px;
  height: 35px;
  margin-top: 20px;
  border: none;
  background-color: #49c1a2;
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
}
p {
  text-align: center;
  padding-top: 20px;
  font-size: 15px;
}
.para2 {
  text-align: center;
  color: white;
  font-size: 15px;
  margin-top: -10px;
}
.para2 a {
  color: #49c1a2;
}
`}
            </style>
        </div>


    );
}

export default register2;

