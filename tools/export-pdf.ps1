$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$inputHtml = Join-Path $root "index.html"
$outputPdf = Join-Path $root "OfficeGuard_Proposal.pdf"

$browserCandidates = @(
  "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files\Microsoft\Edge\Application\msedge.exe",
  "C:\Program Files\Google\Chrome\Application\chrome.exe",
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
)

$browser = $browserCandidates | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $browser) {
  throw "Edge/Chrome browser not found."
}

$fileUrl = "file:///" + ($inputHtml -replace "\\", "/")

$arguments = @(
  "--headless=new",
  "--disable-gpu",
  "--print-to-pdf=$outputPdf",
  "--print-to-pdf-no-header",
  "--run-all-compositor-stages-before-draw",
  "--virtual-time-budget=5000",
  $fileUrl
)

Start-Process -FilePath $browser -ArgumentList $arguments -Wait -NoNewWindow

if (-not (Test-Path $outputPdf)) {
  throw "PDF generation failed: $outputPdf"
}

Write-Output "PDF generated: $outputPdf"
