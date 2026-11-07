# Run the mobile app

The phone and computer must be connected to the same Wi-Fi network.

## 1. Start the backend

Open PowerShell in the main project folder:

```powershell
.\.venv\Scripts\Activate.ps1
python run_servers.py
```

Keep this window open while using the mobile app.

## 2. Check the computer IP address

```powershell
ipconfig
```

Copy the active adapter's IPv4 address into every URL in `mobile/.env`.
The current configured address is `192.168.1.2`.

For an Android emulator, use `10.0.2.2` instead of the Wi-Fi address.

## 3. Start Expo

Open another PowerShell window:

```powershell
cd mobile
npm install
npx expo start --clear
```

If a physical phone still cannot connect, allow Python and Node.js through Windows Firewall for private networks.
