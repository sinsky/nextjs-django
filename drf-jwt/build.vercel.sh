echo "### requirements install"
python3 -m pip install -r requirements.txt

echo "### list"
python3 -m pip list

echo "### makemigrations"
python3 manage.py makemigrations
echo "### collectstatic"
python3 manage.py collectstatic
echo "### migrate"
python3 manage.py migrate
echo "### create superuser"
python3 manage.py createsuperuser --username admin --email admin@example.com --noinput
