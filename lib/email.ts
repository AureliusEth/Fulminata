import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

let transporter: Transporter | null = null

export function createEmailTransport(): Transporter {
  if (transporter) return transporter

  const host = process.env.SMTP_HOST
  const port = parseInt(process.env.SMTP_PORT || '587')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS

  if (!host || !user || !pass) {
    throw new Error('SMTP configuration is incomplete. Please check your .env.local file.')
  }

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  })

  return transporter
}

export interface ConsultationRequest {
  firstName: string
  lastName: string
  email: string
  company: string
  role: string
  interests: string
  message?: string
}

export async function sendConsultationNotification(data: ConsultationRequest): Promise<void> {
  const transporter = createEmailTransport()

  const recipients = [
    'matthew@fulminata.xyz',
    'stephen@fulminata.xyz',
  ]

  const interestLabels: Record<string, string> = {
    tokenization: 'Asset Tokenization',
    custody: 'Digital Asset Custody',
    infrastructure: 'Blockchain Infrastructure',
    defi: 'DeFi Integration',
    advisory: 'Strategic Advisory',
    other: 'Other',
  }

  const formattedInterest = interestLabels[data.interests] || data.interests

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #e0e0e0; border-top: none; }
    .field { margin-bottom: 16px; }
    .field-label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
    .field-value { font-size: 16px; color: #1a1a2e; margin-top: 4px; }
    .message-box { background: white; padding: 16px; border-radius: 6px; border: 1px solid #e0e0e0; margin-top: 8px; }
    .footer { text-align: center; padding: 20px; color: #999; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Consultation Request</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${data.firstName} ${data.lastName}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value">${data.email}</div>
      </div>
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${data.company}</div>
      </div>
      <div class="field">
        <div class="field-label">Role</div>
        <div class="field-value">${data.role}</div>
      </div>
      <div class="field">
        <div class="field-label">Primary Interest</div>
        <div class="field-value">${formattedInterest}</div>
      </div>
      ${data.message ? `
      <div class="field">
        <div class="field-label">Message</div>
        <div class="message-box">${data.message}</div>
      </div>
      ` : ''}
      <div class="field" style="margin-top: 24px;">
        <div class="field-label">Submitted</div>
        <div class="field-value">${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC</div>
      </div>
    </div>
    <div class="footer">
      Fulminata | Institutional-Grade Tokenization Solutions
    </div>
  </div>
</body>
</html>
  `.trim()

  const textContent = `
NEW CONSULTATION REQUEST
========================

Name:      ${data.firstName} ${data.lastName}
Email:     ${data.email}
Company:   ${data.company}
Role:      ${data.role}
Interest:  ${formattedInterest}
Message:   ${data.message || 'None'}

Submitted: ${new Date().toISOString()}

---
Fulminata | Institutional-Grade Tokenization Solutions
  `.trim()

  await transporter.sendMail({
    from: `"${process.env.FROM_NAME || 'Fulminata'}" <${process.env.FROM_EMAIL}>`,
    replyTo: data.email,
    to: recipients.join(', '),
    subject: `[Consultation Request] ${data.firstName} ${data.lastName} - ${formattedInterest}`,
    text: textContent,
    html: htmlContent,
  })
}
