echo "### update sqlite3"
wget https://www.sqlite.org/2022/sqlite-autoconf-3390300.tar.gz
tar xvfz sqlite-autoconf-3390300.tar.gz
cd sqlite-autoconf-3390300

# コンパイル
./configure --prefix=/usr/local
make
sudo make install

# シンボリックリンクを設定してPATHを通す
sudo mv /usr/bin/sqlite3 /usr/bin/sqlite3_old
sudo ln -s /usr/local/bin/sqlite3 /usr/bin/sqlite3
echo export LD_LIBRARY_PATH="/usr/local/lib" >> ~/.bash_profile
source ~/.bash_profile

sqlite3 --version
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
