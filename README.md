## Setup Instructions
1. Install DDEV: https://ddev.readthedocs.io/en/stable/#installation
2. Clone this repo: git clone https://github.com/ahirwarvirendra10-art/riverside-commons.git
3. Run: `ddev start`
4. Run: `ddev composer install`
5. Run: `ddev import-db  --file= db.sql.gz`
6. Run: `ddev drush site:install -y`
7. Open: `ddev launch`

Default admin login: admin / admin123 (or reset with `ddev drush uli`)
