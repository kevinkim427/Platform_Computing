import time
import collections
import csv
from selenium import webdriver
from pymongo import MongoClient
from datetime import datetime

mc = MongoClient('mongodb://localhost:27017/')
db = mc['reactpage']

def writeToCSV(filename : str, metrics : dict):
    with open(file = filename, mode="w", newline="") as fp:
        writer = csv.DictWriter(fp, fieldnames=metrics.keys())
        writer.writeheader()
        writer.writerow(metrics)

def main():
    scroll_coll = db['scroll']
    time_coll = db['time']
    react_coll = db['metrics']
    # Initialize browser
    driver = webdriver.Edge()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    mets = collections.defaultdict(list)
    cd = 0
    sample = 5
    # Track presence time 
    start_time = time.time()
    presence_time = start_time
    while cd < sample: 
        current_time = time.time()
        now = datetime.now()
        ct = now.strftime("%H:%M:%S")
        mets["Current Time (Seconds)"].append(ct)
        presence_time = current_time - start_time        
        mets["Presense Time (Seconds)"].append(presence_time)
       
        scroll_height = driver.execute_script("return document.body.scrollHeight")  
        current_scroll = driver.execute_script("return window.pageYOffset")
        mets["Scroll (Pixels)"].append(current_scroll/scroll_height)
               
        writeToCSV("metrics.csv", mets)

        with open('metrics.csv', 'r') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                react_coll.insert_one(row)
        cd += 1
        time.sleep(2)
    
    driver.quit()
    
if __name__ == "__main__":
    main()