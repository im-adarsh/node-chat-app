#!/bin/bash
apt-get update && apt-get -y install sudo
apt-get --quiet install --yes nodejs
apt-get  --quiet install --yes  npm
apt-get  --quiet install --yes  python-pip # AWS CLI requires python-pip, python is installed by default
python3 -m pip uninstall pip && sudo apt install python3-pip --reinstall  # pip update 
sudo pip install awscli --force-reinstall --upgrade  # AWS CLI installation
npm install
npm run deploy
ls
aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}
aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}
aws configure set default.region ${AWS_DEFAULT_REGION}
aws s3 cp node-chat-app.zip $AWS_S3_LOCATION # Uploads the zipfile to S3 and expects the AWS Code Pipeline/Code Deploy to pick up