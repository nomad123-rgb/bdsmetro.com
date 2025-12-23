
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateConsultationResponse = async (name: string, station: string, phone: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      You are a senior real estate analyst for "BDS Metro", a prestigious institutional research firm in Vietnam.
      A high-net-worth client named "${name}" has requested a planning check for the area around "${station}".
      Their phone number is "${phone}".
      
      Generate a short, very professional, and reassuring confirmation message (in Vietnamese).
      The tone should be like a private banker: polite, concise, official, and trustworthy.
      
      Key points to include:
      1. Acknowledge the request specifically for ${station}.
      2. Mention that our "Data & Legal Team" is extracting the latest planning map (1/2000 or 1/500).
      3. State that a detailed report (PDF) will be sent to their Zalo at ${phone} within 15 minutes.
      4. End with a professional closing.
      
      Do not use emojis excessively. Use formal Vietnamese ("Quý khách", "Chúng tôi").
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Hệ thống đang xử lý yêu cầu của quý khách. Chuyên viên sẽ liên hệ lại ngay.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `Chào ${name}, yêu cầu tra cứu khu vực ${station} đã được ghi nhận. Bộ phận pháp lý sẽ gửi báo cáo qua Zalo ${phone} trong ít phút nữa.`;
  }
};

export const generateArchitecturalRender = async (projectName: string, description: string): Promise<string | null> => {
  try {
    // Using gemini-2.5-flash-image for standard image generation
    const model = 'gemini-2.5-flash-image';
    
    // Prompt engineering for high-end architectural visualization
    const prompt = `
      Hyper-realistic architectural photography of a luxury high-rise condominium building named "${projectName}" in Ho Chi Minh City, Vietnam.
      
      Context from analyst report: "${description}".
      
      Style: Cinematic lighting, twilight hour, 8k resolution, architectural visualization masterpiece, wide angle, modern glass facade, prestigious atmosphere.
      Do not include text in the image.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        // No responseMimeType for image models in this SDK version usually, but we rely on the response structure
      }
    });
    
    // Extract base64 image from the response
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    
    return null;
  } catch (error) {
    console.error("Gemini Image Gen Error:", error);
    return null;
  }
};
