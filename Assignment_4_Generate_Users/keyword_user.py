import time
from selenium import webdriver

def findKeyword(driver, keyword)->bool:
    return keyword in driver.page_source

def main():
    # Initialize browser
    driver = webdriver.Edge()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    reward_time = 10
    total_reward_time = 0
    keywords = ["student", "CSUSB", "Major", "Computer Science"]
    for key in keywords:
        if findKeyword(driver, key):
            total_reward_time += reward_time
            time.sleep(reward_time)
    driver.quit()

    print("Presence Time: ", total_reward_time)    

if __name__ == "__main__":
    main()