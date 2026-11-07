# Gaja Saviya

## Run the project

You need:

- Python 3.10 or newer
- Node.js 18 or newer

### 1. Install everything (first time only)

Open PowerShell in this project folder and run:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
npm install --prefix frontend
npm install --prefix 'Component 4\R26-IT-136-IT22544636_Path_Guard\R26-IT-136-IT22544636_Path_Guard\backend'
```

### 2. Start the APIs

In the first PowerShell window:

```powershell
.\.venv\Scripts\Activate.ps1
python run_servers.py
```

Keep this window open.

### 3. Start the website

Open a second PowerShell window in the project folder:

```powershell
cd frontend
npm run dev
```

### 4. Open the app

Go to [http://localhost:3000](http://localhost:3000) in your browser.

Press `Ctrl+C` in both PowerShell windows to stop the project.
