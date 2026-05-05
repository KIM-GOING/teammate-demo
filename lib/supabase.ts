import { createClient } from "@supabase/supabase-js";

// .env.local 파일에 저장한 Supabase 프로젝트 URL을 가져옵니다.
// NEXT_PUBLIC_으로 시작해야 브라우저에서 사용할 수 있습니다.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

// .env.local 파일에 저장한 Supabase anon public key를 가져옵니다.
// service_role key가 아니라 anon public key를 사용해야 합니다.
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 환경변수가 비어 있으면 Supabase에 연결할 수 없으므로,
// 개발 중에 바로 원인을 알 수 있도록 에러를 띄웁니다.
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase 환경변수가 설정되지 않았습니다.");
}

// 앞으로 다른 페이지에서 이 supabase 객체를 가져와서
// 데이터 조회(select), 등록(insert) 등에 사용할 예정입니다.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);