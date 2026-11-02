document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const brandCards = document.querySelectorAll('.brand-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. 현재 눌린 버튼의 타겟 카테고리 속성값 가져오기
            const targetCategory = button.getAttribute('data-target');

            // 2. 상단 탭 버튼들 중 기존에 활성화된 'active' 클래스를 모두 빼고, 클릭한 버튼에만 추가
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 3. 카드 필터링 처리
            brandCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (targetCategory === 'all') {
                    // 전체보기 모드일 때
                    card.style.display = 'flex';
                } else if (cardCategory === targetCategory) {
                    // 클릭한 탭의 카테고리와 카드의 데이터 카테고리가 일치할 때
                    card.style.display = 'flex';
                } else {
                    // 일치하지 않는 카테고리는 숨김 처리
                    card.style.display = 'none';
                }
            });
        });
    });
});
