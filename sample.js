const API_KEY = 'ChatGPTのAPI';
const URL = "https://api.openai.com/v1/chat/completions";

function reply() {
    var text = document.getElementById("request_text").value;
    async function getResponse() {
        try {
            const response = await axios.post(
                URL,
                {
                    "model": "gpt-3.5-turbo",
                    "messages": [
                        { "role": "user", "content": "つぎの文章を建設的かつフレンドリーかつ優しい表現に変えて、絵文字もたくさん加えてください "+ text }
                    ]
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${API_KEY}`,
                    },
                }
            );
            var chatgpt_response = response.data.choices[0].message.content;
            $("#response_text").val(chatgpt_response);
        } catch (error) {
            console.log(error);
        }
    }
    getResponse();
    //ボタンの表示を変える 
    $("#change").val("もう一度変換");
}
