import { google, sheets_v4 as googleSheets } from 'googleapis'
import { Credentials } from 'google-auth-library'

const getSpreadsheet = (clientSecret: string, clientId: string, authToken: Credentials): googleSheets.Sheets => {
  const auth = new google.auth.OAuth2(clientId, clientSecret)

  auth.setCredentials(authToken)

  return google.sheets({
    version: 'v4',
    auth,
  })
}

export default getSpreadsheet
