import Link from "next/link";
import { supabase } from "@/lib/supabase";

// 이 페이지는 Supabase에서 최신 구인글을 매번 불러와야 합니다.
// Vercel이 정적 페이지처럼 캐싱하지 않도록 강제로 동적 렌더링을 설정합니다.
export const dynamic = "force-dynamic";

export default async function RecruitPage() {
  /*
    Supabase의 recruit_posts 테이블에서 구인글 데이터를 가져옵니다.

    select("*")
    → 모든 컬럼을 가져옵니다.

    order("created_at", { ascending: false })
    → 최신 글이 위에 보이도록 created_at 기준으로 내림차순 정렬합니다.
  */
  const { data: recruitPosts, error } = await supabase
    .from("recruit_posts")
    .select("*")
    .order("created_at", { ascending: false });

  /*
    Supabase 조회 중 에러가 발생했을 때,
    화면에서 바로 확인할 수 있도록 에러 메시지를 보여줍니다.
  */
  if (error) {
    return (
      <main className="min-h-screen bg-slate-100 px-6 py-12">
        <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
          <p className="mb-2 text-sm font-semibold text-red-600">
            Supabase 조회 오류
          </p>
          <h1 className="mb-4 text-2xl font-bold text-gray-950">
            구인글을 불러오지 못했습니다.
          </h1>
          <p className="mb-6 rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-700">
            {error.message}
          </p>

          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            ← 랜딩페이지로 돌아가기
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <section className="mx-auto max-w-6xl">
        {/* 페이지 상단 영역입니다. 제목과 등록 버튼을 보여줍니다. */}
        <div className="mb-10 flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <p className="mb-2 text-sm font-semibold text-blue-600">
              TeamMate Recruit
            </p>
            <h1 className="text-3xl font-bold text-gray-950">팀원 구인글</h1>
            <p className="mt-3 text-gray-600">
              함께 창업팀을 만들고 싶은 대학생들의 구인글을 확인해보세요.
            </p>
          </div>

          <Link
            href="/recruit/new"
            className="w-fit rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
          >
            구인글 등록하기
          </Link>
        </div>

        {/* 
          Supabase에 구인글이 하나도 없을 때 보여주는 빈 상태 화면입니다.
        */}
        {recruitPosts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
            <h2 className="mb-3 text-xl font-semibold text-gray-950">
              아직 등록된 구인글이 없습니다.
            </h2>
            <p className="mb-6 text-gray-600">
              첫 번째 창업팀 구인글을 등록해보세요.
            </p>

            <Link
              href="/recruit/new"
              className="inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              첫 구인글 작성하기
            </Link>
          </div>
        ) : (
          /*
            Supabase에서 가져온 구인글 데이터를 카드 형태로 보여줍니다.

            DB 컬럼명은 project_name, work_type처럼 snake_case이고,
            화면에서는 그대로 post.project_name 형태로 사용합니다.
          */
          <div className="grid gap-5">
            {recruitPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-md md:p-8"
              >
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-blue-600">
                      모집 중
                    </p>
                    <h2 className="text-2xl font-bold text-gray-950">
                      {post.project_name}
                    </h2>
                    <p className="mt-3 leading-7 text-gray-600">
                      {post.summary}
                    </p>
                  </div>

                  <div className="w-fit rounded-xl border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700">
                    연락 방법 확인
                  </div>
                </div>

                {/* 카드 하단 정보 영역입니다. */}
                <div className="grid gap-4 border-t border-gray-100 pt-5 text-sm md:grid-cols-3">
                  <div>
                    <p className="mb-1 font-semibold text-gray-950">
                      모집 역할
                    </p>
                    <p className="leading-6 text-gray-600">{post.roles}</p>
                  </div>

                  <div>
                    <p className="mb-1 font-semibold text-gray-950">
                      활동 방식
                    </p>
                    <p className="leading-6 text-gray-600">{post.work_type}</p>
                  </div>

                  <div>
                    <p className="mb-1 font-semibold text-gray-950">
                      연락 방법
                    </p>
                    <p className="leading-6 text-gray-600">{post.contact}</p>
                  </div>
                </div>

                {/* 상세 설명 영역입니다. */}
                <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                  <p className="mb-1 text-sm font-semibold text-gray-950">
                    상세 설명
                  </p>
                  <p className="whitespace-pre-line text-sm leading-7 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            ← 랜딩페이지로 돌아가기
          </Link>
        </div>
      </section>
    </main>
  );
}