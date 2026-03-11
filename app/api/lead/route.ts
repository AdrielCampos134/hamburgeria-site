import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

type Lead = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
};

const leadsFilePath = path.join(process.cwd(), "leads.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email = "", phone, subject = "", message } = body as Partial<Lead>;

    if (!name || !phone || !message) {
      return NextResponse.json({ success: false, message: "Campos obrigatorios ausentes." }, { status: 400 });
    }

    const lead: Lead = {
      name,
      email,
      phone,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    let currentLeads: Lead[] = [];
    try {
      const file = await fs.readFile(leadsFilePath, "utf8");
      currentLeads = JSON.parse(file) as Lead[];
    } catch {
      currentLeads = [];
    }

    currentLeads.push(lead);
    await fs.writeFile(leadsFilePath, JSON.stringify(currentLeads, null, 2), "utf8");

    return NextResponse.json({ success: true, message: "Mensagem recebida!" });
  } catch {
    return NextResponse.json({ success: false, message: "Erro ao processar mensagem." }, { status: 500 });
  }
}
