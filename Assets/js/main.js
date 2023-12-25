//Setting untuk sidebar dan icon gear

const toggleSidebarButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

toggleSidebarButton.addEventListener('click', function () {
    toggleSidebarButton.classList.toggle('rotate'); // Menambah atau menghapus kelas rotate
    if (sidebar.style.width === '250px') {
        closeSidebar();
    } else {
        openSidebar();
    }
});

document.getElementById('closeSidebar').addEventListener('click', closeSidebar);

document.getElementById('overlay').addEventListener('click', closeSidebar);

function openSidebar() {
    sidebar.style.width = '250px';
    overlay.style.display = 'block';
}

function closeSidebar() {
    sidebar.style.width = '0';
    overlay.style.display = 'none';
    toggleSidebarButton.classList.remove('rotate'); // Menghapus kelas rotate saat menutup sidebar
}
// Setting LiveChat //
const liveChatIcon = document.getElementById('liveChatIcon');
const liveChatBox = document.getElementById('liveChatBox');

liveChatIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    liveChatBox.style.display = liveChatBox.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('#liveChatBox') && event.target !== liveChatIcon) {
        liveChatBox.style.display = 'none';
    }
});

document.getElementById('liveChatForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
    // You can add your logic here
});


