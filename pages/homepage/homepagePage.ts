import { expect, type Locator, type Page} from '@playwright/test'
import '../../fixture'

export class homePagePage{
    page: Page;
    siteLogo: Locator;
    
    constructor(page){
        this.page = page;
        this.siteLogo = page.Locator("//img[@class='wp-image-218123 ls-is-cached lazyloaded']")
    }
}

