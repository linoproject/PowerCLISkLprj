# TODO Change with credentials
$oData = Set-PowerCLIConfiguration -InvalidCertificateAction:Ignore -Confirm:$false
$oData = Set-PowerCLIConfiguration -Scope User -ParticipateInCEIP $true -Confirm:$false
$oServer = Connect-VIServer -Server "vcsa" -Username "user" -Password "pass"
Get-VM | select Name, PowerState | ConvertTo-Json
Disconnect-VIServer -Server * -Force -Confirm:$false
