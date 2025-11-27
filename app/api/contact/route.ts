// import { validateAndSanitizeContactForm } from "@/app/schemas/contact.schema";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const requests = new Map<string, { count: number; lastRequest: number }>();

// const RATE_LIMIT = 3;
// const RATE_WINDOW = 60_000;
// const CLEANUP_INTERVAL = 300_000;

// setInterval(() => {
//   const now = Date.now();
//   for (const [ip, data] of requests.entries()) {
//     if (now - data.lastRequest > RATE_WINDOW * 2) {
//       requests.delete(ip);
//     }
//   }
// }, CLEANUP_INTERVAL);

// function getClientIP(request: Request): string {
//   const forwardedFor = request.headers.get("x-forwarded-for");
//   const realIP = request.headers.get("x-real-ip");
//   const cfConnectingIP = request.headers.get("cf-connecting-ip");
  
//   return (
//     cfConnectingIP ||
//     realIP ||
//     (forwardedFor ? forwardedFor.split(",")[0].trim() : null) ||
//     "unknown"
//   );
// }

// function logSecurityEvent(event: string, ip: string, details?: Record<string, unknown>) {
//   const timestamp = new Date().toISOString();
//   console.log(`[SECURITY] ${timestamp} - ${event} - IP: ${ip}`, details ? JSON.stringify(details) : "");
// }

// export async function POST(req: Request) {
//   const ip = getClientIP(req);
//   const now = Date.now();
//   const userAgent = req.headers.get("user-agent") || "unknown";

//   const entry = requests.get(ip);

//   if (!entry) {
//     requests.set(ip, { count: 1, lastRequest: now });
//   } else {
//     if (now - entry.lastRequest > RATE_WINDOW) {
//       requests.set(ip, { count: 1, lastRequest: now });
//     } else {
//       entry.count++;
//       entry.lastRequest = now;
//       if (entry.count > RATE_LIMIT) {
//         logSecurityEvent("RATE_LIMIT_EXCEEDED", ip, { 
//           userAgent, 
//           attempts: entry.count 
//         });
//         return NextResponse.json(
//           {
//             success: false,
//             error: "Too many requests. Please try again later.",
//           },
//           { status: 429 }
//         );
//       }
//     }
//   }

//   try {
//     const body = await req.json();
    
//     const validatedData = validateAndSanitizeContactForm(body);
    
//     logSecurityEvent("CONTACT_FORM_SUBMISSION", ip, {
//       userAgent,
//       email: validatedData.email,
//       reason: validatedData.reason
//     });

//     const { name, email, phone, reason, message } = validatedData;

//     const data = await resend.emails.send({
//       from: "Fluxor Electric LLC <onboarding@resend.dev>",
//       to: "info@fluxorelectric.com",
//       subject: `New contact message - ${name}`,
//       replyTo: email,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #000000; font-size: 24px;">New Contact Message</h2>
          
//           <div style="background-color: #f8fafc; font-size: 18px; padding: 20px; border-radius: 8px; margin: 20px 0;">
//             <h3 style="color: #000000; margin-top: 0;">Client Information:</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone Number:</strong> ${phone}</p>
//             <p><strong>Reason for Inquiry:</strong> ${reason}</p>
//           </div>
          
//           <div style="background-color: #ffffff; font-size: 18px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
//             <h3 style="color: #000000; margin-top: 0;">Message:</h3>
//             <p style="line-height: 1.6; color: #4b5563;">${message}</p>
//           </div>
          
//           <div style="margin-top: 20px; font-size: 18px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
//             <p style="margin: 0; color: #000000; font-size: 14px;">
//               <strong>Note:</strong> You can reply directly to this email to contact the client.
//             </p>
//           </div>
          
//           <div style="margin-top: 20px; font-size: 12px; padding: 10px; background-color: #f3f4f6; border-radius: 4px; color: #6b7280;">
//             <p style="margin: 0;">
//               <strong>Security Info:</strong><br>
//               IP: ${ip}<br>
//               User Agent: ${userAgent}<br>
//               Timestamp: ${new Date().toISOString()}
//             </p>
//           </div>
//         </div>
//       `,
//       text: `
//         New Contact Message - ${name}
        
//         Client Information:
//         Name: ${name}
//         Email: ${email}
//         Phone Number: ${phone}
//         Reason for Inquiry: ${reason}
        
//         Message:
//         ${message}
        
//         You can reply directly to this email to contact the client.
//       `,
//     });

//     logSecurityEvent("EMAIL_SENT_SUCCESS", ip, { 
//       emailId: data.data?.id || "unknown",
//       recipient: email 
//     });

//     return NextResponse.json({ 
//       success: true, 
//       data: {
//         id: data.data?.id || "unknown",
//         message: "Message sent successfully"
//       }
//     });
//   } catch (error) {
//     // Log del error para debugging (sin exponer detalles sensibles)
//     if (error instanceof Error && error.message.includes("Validation failed")) {
//       logSecurityEvent("VALIDATION_ERROR", ip, { 
//         error: "Invalid form data",
//         userAgent 
//       });
//       return NextResponse.json(
//         { 
//           success: false, 
//           error: "Invalid form data. Please check your inputs and try again." 
//         },
//         { status: 400 }
//       );
//     }

//     logSecurityEvent("INTERNAL_ERROR", ip, { 
//       error: "Email sending failed",
//       userAgent 
//     });
    
//     return NextResponse.json(
//       { success: false, error: "Internal server error. Please try again later." },
//       { status: 500 }
//     );
//   }
// }