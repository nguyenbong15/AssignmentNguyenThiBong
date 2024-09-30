# Nguyen Thi Bong - Assignment

## How to setup to run test scripts
1. Make sure you has already installed vs code, nodejs and run app

2. Clone it to your local machine

   ```
   git clone https://github.com/<%your github username%>/playwright-bdd-example.git
   ```

3. Change directory to `Assignment_NguyenThiBong`

   ```
   cd Assignment_NguyenThiBong
   ```

4. Install dependencies

   ```
   npm install
   ```

5. Install browsers

   ```
   npx playwright install
   ```

6. Run tests using this command

   ```
   npm run headless
   ```

   Output:

   ```
   Running 9 tests using 4 workers
   9 passed (10.4s)
   ```

   If you want to run by using playwright trace viewer:

   ```
   npm run test
   ```