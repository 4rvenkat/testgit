exports.LoginPage=
class LoginPage{
  constructor(page){
             this.page= page;
             this.loginLink="#login2";
             this.userNameInput="#loginusername";
             this.passwordInput="#loginpassword";
             this.loginButton='//button[normalize-space()="Log in"]';
             this.logout='#logout2'
             }
    async gotoLoginPage(){
        await this.page.goto('https://demoblaze.com/index.html')
         }

    async login(userName,password){
        await this.page.locator(this.loginLink).click()
        await this.page.locator(this.userNameInput).fill(userName)
        await this.page.locator(this.passwordInput).fill(password)
        await this.page.locator(this.loginButton).click()
        await this.page.screenshot({path:'tests/screenshots/'+Date.now()+'screenshot1.png'})
        await this.page.locator(this.logout).click()
        //await expect(this.page.getByAltText('Log out')).toBeVisible()
        }
}