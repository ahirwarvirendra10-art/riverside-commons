## Setup Instructions
1. Install DDEV: https://ddev.readthedocs.io/en/stable/#installation
2. Clone this repo: git clone https://github.com/ahirwarvirendra10-art/riverside-commons.git
3. Run: `cd riverside-commons`
4. Run: `ddev start`
5. Run: `ddev composer install`
6. Run: `ddev import-db  --file=db.sql.gz`
7. Run: `ddev drush cim`
8. Run: `ddev drush cr`
9. Extract the files.zip and paste the extracted files folder in riverside-commons/web/sites/default/ by removing the old files folder.
10. Run: `ddev drush uli` // This will provide a login link
11. Copy the login link and paste it in any browser.
