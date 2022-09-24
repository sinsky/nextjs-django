echo "### apt"
apt-get update && apt-get install libsqlite3-dev libbz2-dev libncurses5-dev libgdbm-dev liblzma-dev libssl-dev tcl-dev tk-dev libreadline-dev
echo "### requirements install"
python3 -m pip install -r requirements.dev.txt

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
