"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function NewRecruitPage() {
  // 등록 성공 후 구인글 리스트 페이지로 이동시키기 위해 사용하는 Next.js 기능입니다.
  const router = useRouter();

  // 사용자가 입력한 구인글 내용을 저장하는 상태입니다.
  const [formData, setFormData] = useState({
    projectName: "",
    summary: "",
    roles: "",
    workType: "",
    contact: "",
    description: "",
  });

  // 저장 중인지 표시하기 위한 상태입니다.
  // 저장 버튼을 여러 번 누르는 것을 막는 데 사용합니다.
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Supabase 저장 중 오류가 생겼을 때 화면에 보여줄 메시지입니다.
  const [errorMessage, setErrorMessage] = useState("");

  // input, textarea 값이 바뀔 때마다 formData를 업데이트합니다.
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 폼 제출 시 Supabase recruit_posts 테이블에 데이터를 저장합니다.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 이전 오류 메시지를 초기화합니다.
    setErrorMessage("");

    // 버튼 중복 클릭을 막기 위해 저장 중 상태로 바꿉니다.
    setIsSubmitting(true);

    /*
      Supabase 테이블 컬럼명은 snake_case입니다.
      그래서 화면에서 쓰는 projectName, workType을
      DB 컬럼명인 project_name, work_type으로 바꿔서 저장합니다.
    */
    const { error } = await supabase.from("recruit_posts").insert({
      project_name: formData.projectName,
      summary: formData.summary,
      roles: formData.roles,
      work_type: formData.workType,
      contact: formData.contact,
      description: formData.description,
    });

    // 저장이 끝났으므로 저장 중 상태를 해제합니다.
    setIsSubmitting(false);

    // Supabase 저장 중 오류가 있으면 화면에 오류를 보여주고 여기서 멈춥니다.
    if (error) {
      setErrorMessage(error.message);
      return;
    }

    // 저장 성공 후 구인글 리스트 페이지로 이동합니다.
    // refresh를 함께 호출해 리스트 페이지가 최신 데이터를 다시 불러오게 합니다.
    router.push("/recruit");
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <section className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold text-blue-600">
            Create Recruit Post
          </p>
          <h1 className="text-3xl font-bold text-gray-900">
            팀원 구인글 등록
          </h1>
          <p className="mt-3 text-gray-600">
            창업 아이디어와 필요한 팀원 역할을 소개하는 구인글을 작성합니다.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-8"
        >
          {/* Supabase 저장 오류가 발생했을 때만 보여주는 영역입니다. */}
          {errorMessage && (
            <div className="mb-6 rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-700">
              <p className="font-semibold">구인글 저장 중 오류가 발생했습니다.</p>
              <p className="mt-1">{errorMessage}</p>
            </div>
          )}

          {/* 프로젝트명 입력 */}
          <div className="mb-6">
            <label
              htmlFor="projectName"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              프로젝트명
            </label>
            <input
              id="projectName"
              name="projectName"
              type="text"
              value={formData.projectName}
              onChange={handleChange}
              placeholder="예: AI 발표 연습 도우미"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* 한 줄 소개 입력 */}
          <div className="mb-6">
            <label
              htmlFor="summary"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              한 줄 소개
            </label>
            <input
              id="summary"
              name="summary"
              type="text"
              value={formData.summary}
              onChange={handleChange}
              placeholder="예: 발표 대본을 분석하고 피드백을 제공하는 서비스입니다."
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* 모집 역할 입력 */}
          <div className="mb-6">
            <label
              htmlFor="roles"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              모집 역할
            </label>
            <input
              id="roles"
              name="roles"
              type="text"
              value={formData.roles}
              onChange={handleChange}
              placeholder="예: 프론트엔드 개발자, UI/UX 디자이너"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* 활동 방식 입력 */}
          <div className="mb-6">
            <label
              htmlFor="workType"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              활동 방식
            </label>
            <input
              id="workType"
              name="workType"
              type="text"
              value={formData.workType}
              onChange={handleChange}
              placeholder="예: 온라인 중심, 주 1회 회의"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* 연락 방법 입력 */}
          <div className="mb-6">
            <label
              htmlFor="contact"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              연락 방법
            </label>
            <input
              id="contact"
              name="contact"
              type="text"
              value={formData.contact}
              onChange={handleChange}
              placeholder="예: 이메일, 오픈채팅 링크, 카카오톡 ID"
              required
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* 상세 설명 입력 */}
          <div className="mb-8">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-gray-900"
            >
              상세 설명
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="프로젝트 소개, 현재 진행 상황, 찾고 있는 팀원의 역할 등을 자유롭게 작성해주세요."
              rows={6}
              required
              className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* 버튼 영역 */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-xl bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
            >
              {isSubmitting ? "등록 중..." : "구인글 등록하기"}
            </button>

            <Link
              href="/recruit"
              className="rounded-xl border border-gray-300 bg-white px-6 py-4 text-center text-base font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              리스트로 돌아가기
            </Link>
          </div>
        </form>

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