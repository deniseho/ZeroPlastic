#!/bin/bash

deviceList=$(adb devices | awk 'NR > 1 {print $1}' | sed ':a;N;$!ba;s/\n/ /g')
array=($deviceList)

for device in "${array[@]}"; do
	echo "adb -s ${device} uninstall io.ionic.starter"
	adb -s ${device} uninstall io.ionic.starter
	sleep 2
	ionic cordova run android --target=${device}
done
