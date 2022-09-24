echo "### use sqlite3 version"
sqlite3 --version
echo "### requirements install"
python3 -m pip install -r requirements.dev.txt

echo "### list"
python3 -m pip list

echo "### enviroment from RENDER"
env | grep RENDER

echo "### makemigrations"
python3 manage.py makemigrations
python3 manage.py showmigrations
echo "### collectstatic"
python3 manage.py collectstatic
echo "### migrate"
python3 manage.py migrate
echo "### create superuser"
python3 manage.py createsuperuser --username admin --email admin@example.com --noinput
