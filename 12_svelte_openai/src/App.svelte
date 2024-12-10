<script>
  import OpenAI from "openai";

  let haiku = "";

  const config = {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  };

  const openai = new OpenAI(config);

  async function runPrompt() {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: "write a haiku about ai" }],
    });
    haiku = response.choices[0].message.content;
  }

  runPrompt();
</script>

<p>{haiku}</p>
