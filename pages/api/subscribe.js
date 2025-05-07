import mailjet from 'node-mailjet';

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        // Initialize the client using the correct method
        const mailjetClient = mailjet.apiConnect(
            process.env.MAILJET_API_KEY,
            process.env.MAILJET_SECRET_KEY
        );

        // Create the request to add the email to the contact list
        // const request = mailjetClient.post('contact', { version: 'v3' }).request({
        //   Email: email,
        // });

        const request = mailjetClient.post('contact', {
            version: 'v3',
            body: {
                Email: email,
            }
        });

        const response = await request;
        console.log(response.body);  // Optional: Check the response

        res.status(200).json({ message: "Subscription successful!" });
    } catch (error) {
        console.error("Mailjet Error:", error);
        res.status(500).json({ error: "Failed to subscribe." });
    }
}
