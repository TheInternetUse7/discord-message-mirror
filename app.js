import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "TOKEN"
);

gateway.on("message", (m) => {
  if (m.channel_id === "CHANNEL_ID") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "WEBHOOK_URL",
      content
    );
  }
});
