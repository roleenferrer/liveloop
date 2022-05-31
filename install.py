import os

print("Now installing backend components...")

os.chdir('./backend')
os.system('npm install --legacy-peer-deps')

print("Now installing docker image...")
os.system('docker compose down')
os.system('docker compose up -d')

print("Dependencies for backend are completed!")

print("Now installing frontend dependencies...")
os.chdir('../frontend')
os.system('npm install --legacy-peer-deps')

print("Dependencies for frontend are completed!")
