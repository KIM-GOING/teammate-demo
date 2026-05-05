import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 
        Hero 섹션
        - 사용자가 처음 들어왔을 때 서비스의 핵심 가치를 바로 이해하게 만드는 영역입니다.
        - CTA 버튼 2개를 배치해서 리스트 조회 또는 구인글 등록으로 이동할 수 있게 합니다.
      */}
      <section className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-500/15 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/30">
              대학생 창업팀 멤버 매칭 서비스
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              창업 아이디어는 있는데,
              <br />
              함께할 팀원이 없나요?
            </h1>

            <p className="mb-8 text-lg leading-8 text-slate-300">
              TeamMate는 창업 아이디어를 가진 대학생이 개발자, 디자이너,
              마케터 등 함께할 팀원을 찾을 수 있도록 돕는 팀원 매칭
              서비스입니다.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/recruit"
                className="rounded-xl bg-blue-600 px-6 py-4 text-center text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
              >
                모집 중인 팀 보기
              </Link>

              <Link
                href="/recruit/new"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-center text-base font-semibold text-white transition hover:bg-white/15"
              >
                팀원 구인글 등록하기
              </Link>
            </div>
          </div>

          {/* 
            서비스 미리보기 카드
            - 실제 서비스에 구인글 카드가 올라와 있는 느낌을 주기 위한 시각 요소입니다.
            - 아직 실제 데이터와 연결된 영역은 아닙니다.
          */}
          <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-2xl shadow-blue-100">
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  TeamMate Recruit
                </p>
                <p className="text-sm text-gray-500">모집 중인 창업팀</p>
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                NEW
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-5">
                <p className="mb-2 text-sm font-semibold text-blue-600">
                  AI 서비스
                </p>
                <h3 className="mb-2 text-lg font-bold text-gray-950">
                  AI 발표 연습 도우미
                </h3>
                <p className="mb-4 text-sm leading-6 text-gray-600">
                  발표 대본을 분석하고 피드백을 제공하는 대학생 발표 연습
                  서비스입니다.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700">
                    프론트엔드 모집
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700">
                    디자이너 모집
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 p-5">
                <p className="mb-2 text-sm font-semibold text-blue-600">
                  캠퍼스 서비스
                </p>
                <h3 className="mb-2 text-lg font-bold text-gray-950">
                  캠퍼스 중고거래 앱
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  같은 학교 학생끼리 안전하게 거래할 수 있는 중고거래
                  플랫폼을 함께 만들 팀원을 찾고 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        문제 공감 섹션
        - 사용자가 겪는 어려움을 카드 형태로 보여줍니다.
        - “이 서비스가 왜 필요한지”를 설득하는 영역입니다.
      */}
      <section className="border-b border-gray-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-blue-600">
              Why TeamMate?
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              좋은 아이디어보다 더 어려운 건,
              <br />
              함께 시작할 사람을 찾는 일입니다.
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              창업 아이디어는 있지만 주변에 개발자가 없고, 디자인을 맡아줄
              친구를 찾기 어렵고, 마케팅이나 사업화를 함께 고민할 팀원을
              만나기도 쉽지 않습니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                💻
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-950">
                개발자를 어디서 찾아야 할지 모르겠어요
              </h3>
              <p className="leading-7 text-gray-600">
                아이디어는 있지만 웹이나 앱으로 구현해줄 팀원을 찾기 어렵습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                🎨
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-950">
                디자인과 브랜딩을 맡아줄 사람이 필요해요
              </h3>
              <p className="leading-7 text-gray-600">
                서비스 화면, 로고, 발표 자료까지 함께 고민할 디자이너가
                필요합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-xl">
                🚀
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-950">
                혼자 시작하려니 막막해요
              </h3>
              <p className="leading-7 text-gray-600">
                창업은 아이디어만으로 어렵습니다. 함께 실행할 팀이 필요합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        해결 방식 섹션
        - TeamMate에서 사용자가 무엇을 할 수 있는지 설명합니다.
        - 구인글 작성 예시를 보여주어 사용자가 행동을 쉽게 상상할 수 있게 합니다.
      */}
      <section className="border-b border-gray-200 bg-slate-100 px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold text-blue-600">
              How it works
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              팀원을 찾는 과정을
              <br />
              구인글 하나로 시작하세요.
            </h2>
            <p className="mb-8 text-lg leading-8 text-slate-300">
              아이디어를 소개하고, 필요한 역할을 적고, 관심 있는 사람에게
              연락을 받을 수 있습니다. 복잡한 가입 절차 없이 MVP 단계에서는
              구인글 등록과 조회에 집중합니다.
            </p>

            <Link
              href="/recruit/new"
              className="inline-block rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              구인글 등록하러 가기
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-gray-200">
            <p className="mb-4 text-sm font-semibold text-blue-600">
              구인글 작성 예시
            </p>

            <div className="space-y-4">
              <div>
                <p className="mb-1 text-sm font-semibold text-gray-500">
                  프로젝트명
                </p>
                <p className="rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-900">
                  캠퍼스 창업팀 매칭 앱
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold text-gray-500">
                  모집 역할
                </p>
                <p className="rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-900">
                  프론트엔드 개발자, UI/UX 디자이너
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold text-gray-500">
                  활동 방식
                </p>
                <p className="rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-900">
                  온라인 중심, 주 1회 회의
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold text-gray-500">
                  연락 방법
                </p>
                <p className="rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-900">
                  오픈채팅 링크 또는 이메일
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        핵심 기능 섹션
        - MVP에서 제공하는 3가지 핵심 기능을 명확히 보여줍니다.
      */}
      <section className="bg-blue-600 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold text-blue-100">
              Core Features
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              창업팀 매칭에 필요한 기능만 먼저 담았습니다.
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-blue-50">
              TeamMate MVP는 복잡한 기능보다 팀원 모집에 필요한 가장 기본적인
              흐름에 집중합니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-blue-800/10">
              <p className="mb-4 text-sm font-bold text-blue-700">01</p>
              <h3 className="mb-2 text-xl font-bold text-gray-950">
                팀원 구인글 등록
              </h3>
              <p className="leading-7 text-gray-600">
                아이디어와 필요한 역할을 간단히 작성하고 팀원 모집을
                시작합니다.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-blue-800/10">
              <p className="mb-4 text-sm font-bold text-blue-700">02</p>
              <h3 className="mb-2 text-xl font-bold text-gray-950">
                구인글 리스트 조회
              </h3>
              <p className="leading-7 text-gray-600">
                모집 중인 대학생 창업팀을 한눈에 확인하고 관심 있는 프로젝트를
                찾습니다.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-blue-800/10">
              <p className="mb-4 text-sm font-bold text-blue-700">03</p>
              <h3 className="mb-2 text-xl font-bold text-gray-950">
                관심 있는 팀에 연락
              </h3>
              <p className="leading-7 text-gray-600">
                작성자가 남긴 이메일이나 오픈채팅 링크를 통해 바로 연락을
                시작합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        사용 흐름 섹션
        - 사용자가 서비스에서 어떤 순서로 행동하면 되는지 설명합니다.
      */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold text-blue-300">
              Simple Process
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              복잡한 절차 없이,
              <br />
              3단계로 팀원 모집을 시작하세요.
            </h2>
            <p className="text-lg leading-8 text-gray-300">
              TeamMate는 대학생 창업팀이 빠르게 팀원을 찾을 수 있도록 간단한
              흐름으로 구성되어 있습니다.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-4 text-sm font-bold text-blue-300">STEP 1</p>
              <h3 className="mb-2 text-xl font-bold">아이디어 등록</h3>
              <p className="leading-7 text-gray-300">
                만들고 싶은 서비스나 창업 아이디어를 구인글로 작성합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-4 text-sm font-bold text-blue-300">STEP 2</p>
              <h3 className="mb-2 text-xl font-bold">필요한 역할 소개</h3>
              <p className="leading-7 text-gray-300">
                개발자, 디자이너, 마케터 등 지금 필요한 팀원 역할을 적습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="mb-4 text-sm font-bold text-blue-300">STEP 3</p>
              <h3 className="mb-2 text-xl font-bold">관심 있는 팀과 연락</h3>
              <p className="leading-7 text-gray-300">
                구인글에 남긴 연락 방법을 통해 팀원 모집과 합류를 시작합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        최종 CTA 섹션
        - 랜딩페이지를 다 읽은 사용자가 실제 행동으로 이어지도록 유도합니다.
      */}
      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-6 py-14 text-center text-white shadow-2xl shadow-blue-200 md:px-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            혼자 고민하던 창업 아이디어,
            <br />
            이제 함께할 팀원을 찾아보세요.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-blue-50">
            TeamMate에서 첫 구인글을 등록하거나, 지금 모집 중인 대학생 창업팀을
            확인해보세요.
          </p>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/recruit/new"
              className="rounded-xl bg-white px-6 py-4 text-base font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              팀원 구인글 등록하기
            </Link>

            <Link
              href="/recruit"
              className="rounded-xl border border-white/40 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              모집 중인 팀 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}