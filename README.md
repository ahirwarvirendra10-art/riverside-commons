## Setup Instructions
1. Install DDEV: https://ddev.readthedocs.io/en/stable/#installation
2. Clone this repo: git clone https://github.com/ahirwarvirendra10-art/riverside-commons.git
3. Run: `ddev start`
4. Run: `cd riverside-commons`
5. Run: `ddev composer install`
6. Run: `ddev import-db  --file=db.sql.gz`
7. Run: `ddev drush cim`
8. Run: `ddev drush cr`
9. Run: `ddev drush site:install -y` //this will provide username and password
10. Open: `ddev launch`

Default admin login: admin / admin123 (or reset with `ddev drush uli`)
