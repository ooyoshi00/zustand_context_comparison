import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const STORAGE_FILE = path.join(process.cwd(), 'storage.json');

// データの読み込み
export async function GET() {
  // 意図的な遅延
  await new Promise(resolve => setTimeout(resolve, 2000));

  try {
    const data = await fs.readFile(STORAGE_FILE, 'utf-8');
    const { todos, buttonColor } = JSON.parse(data);
    return NextResponse.json({ todos, buttonColor });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // ファイルが存在しない場合はデフォルト値を返す
    return NextResponse.json({
      todos: [],
      buttonColor: '#3B82F6'
    });
  }
}

// データの保存
export async function POST(request: Request) {
  // 意図的な遅延
  await new Promise(resolve => setTimeout(resolve, 3000));

  try {
    const { todos, buttonColor } = await request.json();
    await fs.writeFile(
      STORAGE_FILE,
      JSON.stringify({ todos, buttonColor }, null, 2),
      'utf-8'
    );
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('データの保存に失敗しました:', error);
    return NextResponse.json(
      { error: 'データの保存に失敗しました' },
      { status: 500 }
    );
  }
} 