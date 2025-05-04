const data = {
    industries: {
        tech: {
            title: "Kỹ thuật - Công nghệ",
            content: `
                <p>Ngành Kỹ thuật - Công nghệ bao gồm các lĩnh vực như Công nghệ thông tin, Cơ khí, Điện tử, và Kỹ thuật ô tô. Đây là ngành dẫn đầu xu hướng công nghệ 4.0, phù hợp với những người yêu thích sáng tạo và giải quyết vấn đề.</p>
                <h4>Cơ hội việc làm</h4>
                <p>Lập trình viên, kỹ sư cơ khí, chuyên gia AI, kỹ sư ô tô... Mức lương trung bình: 15-40 triệu VNĐ/tháng.</p>
                <h4>Trường đào tạo tiêu biểu</h4>
                <ul>
                    <li>ĐH Bách Khoa Hà Nội</li>
                    <li>ĐH Công nghệ - ĐH Quốc gia TP.HCM</li>
                    <li>ĐH FPT</li>
                </ul>
            `
        },
        business: {
            title: "Kinh tế - Quản trị",
            content: `
                <p>Ngành Kinh tế - Quản trị bao gồm Quản trị kinh doanh, Marketing, Kế toán, và Tài chính. Phù hợp với người năng động, có kỹ năng lãnh đạo và giao tiếp.</p>
                <h4>Cơ hội việc làm</h4>
                <p>Chuyên viên marketing, quản lý dự án, kế toán viên, chuyên gia tài chính... Mức lương trung bình: 12-35 triệu VNĐ/tháng.</p>
                <h4>Trường đào tạo tiêu biểu</h4>
                <ul>
                    <li>ĐH Kinh tế Quốc dân</li>
                    <li>ĐH Ngoại thương</li>
                    <li>ĐH Kinh tế TP.HCM</li>
                </ul>
            `
        },
        medical: {
            title: "Y - Dược",
            content: `
                <p>Ngành Y - Dược bao gồm Y khoa, Dược học, Điều dưỡng, và Răng Hàm Mặt. Ngành nghề ổn định, có ý nghĩa xã hội cao, đòi hỏi sự tận tâm.</p>
                <h4>Cơ hội việc làm</h4>
                <p>Bác sĩ, dược sĩ, điều dưỡng, nha sĩ... Mức lương trung bình: 15-50 triệu VNĐ/tháng.</p>
                <h4>Trường đào tạo tiêu biểu</h4>
                <ul>
                    <li>ĐH Y Hà Nội</li>
                    <li>ĐH Y Dược TP.HCM</li>
                    <li>ĐH Dược Hà Nội</li>
                </ul>
            `
        },
        social: {
            title: "Khoa học xã hội",
            content: `
                <p>Ngành Khoa học xã hội bao gồm Luật, Báo chí, Quan hệ quốc tế, và Sư phạm. Phù hợp với người yêu thích nghiên cứu, giao tiếp và phân tích xã hội.</p>
                <h4>Cơ hội việc làm</h4>
                <p>Luật sư, nhà báo, giáo viên, chuyên gia ngoại giao... Mức lương trung bình: 10-30 triệu VNĐ/tháng.</p>
                <h4>Trường đào tạo tiêu biểu</h4>
                <ul>
                    <li>ĐH Luật Hà Nội</li>
                    <li>Học viện Báo chí và Tuyên truyền</li>
                    <li>ĐH Sư phạm Hà Nội</li>
                </ul>
            `
        },
        art: {
            title: "Nghệ thuật - Thiết kế",
            content: `
                <p>Ngành Nghệ thuật - Thiết kế bao gồm Thiết kế đồ họa, Âm nhạc, Điện ảnh, và Mỹ thuật. Phù hợp với người sáng tạo, có năng khiếu nghệ thuật.</p>
                <h4>Cơ hội việc làm</h4>
                <p>Nhà thiết kế đồ họa, nhạc sĩ, đạo diễn, họa sĩ... Mức lương trung bình: 10-35 triệu VNĐ/tháng.</p>
                <h4>Trường đào tạo tiêu biểu</h4>
                <ul>
                    <li>ĐH Mỹ thuật TP.HCM</li>
                    <li>ĐH Sân khấu Điện ảnh Hà Nội</li>
                    <li>ĐH Kiến trúc TP.HCM</li>
                </ul>
            `
        }
    },
    scholarships: {
        national: {
            title: "Học bổng ĐH Quốc gia",
            content: `
                <p>Học bổng ĐH Quốc gia dành cho học sinh xuất sắc, nhằm khuyến khích học tập và phát triển tài năng.</p>
                <h4>Điều kiện</h4>
                <ul>
                    <li>Điểm trung bình học kỳ ≥ 8.0.</li>
                    <li>Tham gia ít nhất 1 hoạt động ngoại khóa cấp trường/tỉnh.</li>
                    <li>Không vi phạm nội quy trường học.</li>
                </ul>
                <h4>Cách nộp đơn</h4>
                <p>Nộp hồ sơ trực tiếp tại văn phòng ĐH Quốc gia hoặc qua cổng trực tuyến. Hồ sơ gồm: Đơn xin học bổng, bảng điểm, giấy chứng nhận thành tích.</p>
            `
        },
        vinfuture: {
            title: "Học bổng VinFuture",
            content: `
                <p>Học bổng VinFuture hỗ trợ sinh viên ngành STEM (Khoa học, Công nghệ, Kỹ thuật, Toán học) để thúc đẩy nghiên cứu và đổi mới.</p>
                <h4>Điều kiện</h4>
                <ul>
                    <li>Đăng ký học ngành STEM tại trường ĐH được công nhận.</li>
                    <li>Có ít nhất 1 dự án nghiên cứu hoặc bài báo khoa học.</li>
                    <li>GPA ≥ 3.5/4.0 hoặc tương đương.</li>
                </ul>
                <h4>Cách nộp đơn</h4>
                <p>Đăng ký qua website VinFuture, nộp kèm bài luận 500 từ về mục tiêu nghiên cứu và CV.</p>
            `
        },
        loan: {
            title: "Vay vốn sinh viên",
            content: `
                <p>Chương trình vay vốn sinh viên từ ngân hàng nhà nước, hỗ trợ học phí và chi phí sinh hoạt với lãi suất thấp.</p>
                <h4>Điều kiện</h4>
                <ul>
                    <li>Đang học tại trường ĐH/CĐ được công nhận.</li>
                    <li>Hộ khẩu thuộc diện khó khăn (có xác nhận địa phương).</li>
                    <li>Cam kết hoàn trả sau khi tốt nghiệp.</li>
                </ul>
                <h4>Cách nộp đơn</h4>
                <p>Liên hệ ngân hàng chính sách xã hội tại địa phương, nộp hồ sơ gồm: Đơn vay vốn, giấy xác nhận nhập học, giấy tờ chứng minh hoàn cảnh.</p>
            `
        },
        "scholarship-guide": {
            title: "Hướng dẫn viết đơn xin học bổng",
            content: `
                <p>Viết đơn xin học bổng là bước quan trọng để thuyết phục nhà tài trợ rằng bạn xứng đáng nhận hỗ trợ. Dưới đây là hướng dẫn chi tiết:</p>
                <h4>1. Mở đầu</h4>
                <p>Giới thiệu bản thân (họ tên, trường học, ngành học) và mục đích viết đơn. Ví dụ: "Tôi là Nguyễn Văn A, sinh viên năm nhất ngành CNTT, xin ứng tuyển học bổng ĐH Quốc gia."</p>
                <h4>2. Thành tích học tập</h4>
                <p>Liệt kê điểm trung bình, giải thưởng, hoặc thành tích nổi bật. Ví dụ: "Tôi đạt GPA 8.5/10 và giải Nhì cuộc thi Tin học cấp tỉnh."</p>
                <h4>3. Hoàn cảnh và động lực</h4>
                <p>Giải thích lý do cần học bổng (khó khăn tài chính, đam mê học tập) và cách học bổng giúp bạn đạt mục tiêu. Ví dụ: "Học bổng sẽ giúp tôi trang trải học phí, tập trung vào nghiên cứu AI."</p>
                <h4>4. Kế hoạch tương lai</h4>
                <p>Trình bày mục tiêu nghề nghiệp và cam kết đóng góp sau khi nhận học bổng. Ví dụ: "Tôi mong trở thành kỹ sư AI và góp phần phát triển công nghệ Việt Nam."</p>
                <h4>5. Kết thúc</h4>
                <p>Cảm ơn nhà tài trợ và bày tỏ mong muốn được phỏng vấn. Ví dụ: "Tôi xin chân thành cảm ơn và hy vọng có cơ hội trao đổi thêm."</p>
                <h4>Lưu ý</h4>
                <ul>
                    <li>Viết ngắn gọn, súc tích (500-700 từ).</li>
                    <li>Kiểm tra lỗi chính tả và ngữ pháp.</li>
                    <li>Đính kèm tài liệu hỗ trợ (bảng điểm, CV, thư giới thiệu).</li>
                </ul>
            `
        }
    }
};

// Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('detailsModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const type = button.parentElement.dataset.type || button.dataset.type;
            const id = button.parentElement.dataset.id || button.dataset.id;
            const itemData = type === 'industry' ? data.industries[id] : data.scholarships[id];

            modalTitle.textContent = itemData.title;
            modalContent.innerHTML = itemData.content;

            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Table Filter Functionality
function filterTable() {
    const input = document.getElementById('schoolFilter').value.toLowerCase();
    const table = document.getElementById('schoolTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }
        rows[i].style.display = match ? '' : 'none';
    }
}