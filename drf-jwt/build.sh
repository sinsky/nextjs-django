#!/usr/bin/env bash
# exit on error
set -o errexit
echo "### pip install"
pip install -r requirements.txt

echo "### collectstatic"
python manage.py collectstatic --noinput
echo "### migrate"
python manage.py migrate
echo "create super user"
#python manage.py createsuperuser --username admin --email example@example.com --noinput
