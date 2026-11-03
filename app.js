/**
 * ElimuBora School Management System - Core Application Logic
 * Vanilla JavaScript (ES6+)
 * Localized for Kenya: CBC/8-4-4, NEMIS, UPI, and M-PESA Daraja Integration
 */

// Application State Store
const state = {
  activeView: 'dashboard',
  students: [
    {
      id: 'STU-1001',
      name: 'Otieno, Brian Omondi',
      nemis: '74829101',
      upi: 'UPI-9842',
      assessmentNo: '40101-012',
      nationalIdBc: 'BC-9923812',
      grade: 'Grade 9 (CBC)',
      pathway: 'STEM Pathway',
      county: 'Kisumu',
      subCounty: 'Kisumu Central',
      guardianName: 'Grace A. Otieno',
      guardianPhone: '712345678',
      totalFee: 35000,
      paidFee: 35000,
      cbcRating: 'EE',
      cbcScore: 4,
      cbcComment: 'Demonstrates deep analytical inquiry in chemical experiments.',
      status: 'Active'
    },
    {
      id: 'STU-1002',
      name: 'Wanjiku, Faith Njeri',
      nemis: '83920194',
      upi: 'UPI-8841',
      assessmentNo: '40101-045',
      nationalIdBc: 'BC-7728192',
      grade: 'Grade 10 (Senior)',
      pathway: 'Social Sciences',
      county: 'Kiambu',
      subCounty: 'Kikuyu',
      guardianName: 'Peter M. Wanjiku',
      guardianPhone: '722987654',
      totalFee: 35000,
      paidFee: 22500,
      cbcRating: 'ME',
      cbcScore: 3,
      cbcComment: 'Consistent understanding of target learning competencies.',
      status: 'Active'
    },
    {
      id: 'STU-1003',
      name: 'Kipchoge, Emmanuel K.',
      nemis: '63910283',
      upi: 'UPI-7732',
      assessmentNo: '40101-089',
      nationalIdBc: 'BC-8819230',
      grade: 'Form 4 (8-4-4)',
      pathway: 'KCSE Candidate',
      county: 'Uasin Gishu',
      subCounty: 'Eldoret East',
      guardianName: 'Silas Kipchoge',
      guardianPhone: '720112233',
      totalFee: 35000,
      paidFee: 15000,
      cbcRating: 'ME',
      cbcScore: 3,
      cbcComment: 'Shows disciplined focus in mock examinations.',
      status: 'Active'
    },
    {
      id: 'STU-1004',
      name: 'Nekesa, Brenda Simiyu',
      nemis: '91827364',
      upi: 'UPI-6621',
      assessmentNo: '40101-112',
      nationalIdBc: 'BC-6638192',
      grade: 'Grade 9 (CBC)',
      pathway: 'Arts & Sports',
      county: 'Kakamega',
      subCounty: 'Lurambi',
      guardianName: 'Florence Nekesa',
      guardianPhone: '714556677',
      totalFee: 35000,
      paidFee: 35000,
      cbcRating: 'EE',
      cbcScore: 4,
      cbcComment: 'Exemplary leadership in collaborative class presentations.',
      status: 'Active'
    },
    {
      id: 'STU-1005',
      name: 'Mutua, Kelvin Musyoka',
      nemis: '55667788',
      upi: 'UPI-5510',
      assessmentNo: '40101-140',
      nationalIdBc: 'BC-5529101',
      grade: 'Form 3 (8-4-4)',
      pathway: 'Sciences & Humanities',
      county: 'Machakos',
      subCounty: 'Mavoko',
      guardianName: 'Joseph Mutua',
      guardianPhone: '721889900',
      totalFee: 35000,
      paidFee: 5000,
      cbcRating: 'AE',
      cbcScore: 2,
      cbcComment: 'Requires extra review on algebraic concepts.',
      status: 'Active'
    },
    {
      id: 'STU-1006',
      name: 'Amina, Fatuma Hassan',
      nemis: '44556677',
      upi: 'UPI-4409',
      assessmentNo: '40101-168',
      nationalIdBc: 'BC-4418290',
      grade: 'Grade 10 (Senior)',
      pathway: 'STEM Pathway',
      county: 'Mombasa',
      subCounty: 'Nyali',
      guardianName: 'Hassan Omar',
      guardianPhone: '710998877',
      totalFee: 35000,
      paidFee: 35000,
      cbcRating: 'EE',
      cbcScore: 4,
      cbcComment: 'Outstanding research on renewable energy designs.',
      status: 'Active'
    },
    {
      id: 'STU-1007',
      name: 'Chebet, Mercy Jelagat',
      nemis: '33445566',
      upi: 'UPI-3398',
      assessmentNo: '40101-190',
      nationalIdBc: 'BC-3382910',
      grade: 'Form 4 (8-4-4)',
      pathway: 'KCSE Candidate',
      county: 'Nakuru',
      subCounty: 'Rongai',
      guardianName: 'Esther Chebet',
      guardianPhone: '715443322',
      totalFee: 35000,
      paidFee: 20000,
      cbcRating: 'AE',
      cbcScore: 2,
      cbcComment: 'Progressing well with targeted remedial tutoring.',
      status: 'Active'
    },
    {
      id: 'STU-1008',
      name: 'Mwangi, Dennis Kariuki',
      nemis: '22334455',
      upi: 'UPI-2287',
      assessmentNo: '40101-215',
      nationalIdBc: 'BC-2291029',
      grade: 'Grade 9 (CBC)',
      pathway: 'STEM Pathway',
      county: 'Nyeri',
      subCounty: 'Tetu',
      guardianName: 'Samuel Mwangi',
      guardianPhone: '723334455',
      totalFee: 35000,
      paidFee: 8000,
      cbcRating: 'BE',
      cbcScore: 1,
      cbcComment: 'Scheduled for parent-teacher remedial intervention.',
      status: 'Active'
    }
  ],

  mpesaTransactions: [
    {
      receipt: 'QJK83910M',
      studentName: 'Otieno, Brian Omondi',
      upi: 'UPI-9842',
      phone: '+254 712 345 678',
      amount: 15000,
      category: 'Tuition & Operations',
      status: 'Completed',
      time: 'Today 14:32 EAT'
    },
    {
      receipt: 'QJK77412K',
      studentName: 'Amina, Fatuma Hassan',
      upi: 'UPI-4409',
      phone: '+254 710 998 877',
      amount: 35000,
      category: 'Full Term Fee',
      status: 'Completed',
      time: 'Today 11:15 EAT'
    },
    {
      receipt: 'QJK65219P',
      studentName: 'Wanjiku, Faith Njeri',
      upi: 'UPI-8841',
      phone: '+254 722 987 654',
      amount: 12500,
      category: 'Boarding & Amenities',
      status: 'Completed',
      time: 'Yesterday 16:45 EAT'
    },
    {
      receipt: 'QJK54902L',
      studentName: 'Nekesa, Brenda Simiyu',
      upi: 'UPI-6621',
      phone: '+254 714 556 677',
      amount: 20000,
      category: 'CBC Kit & Tuition',
      status: 'Completed',
      time: 'Yesterday 09:20 EAT'
    }
  ],

  staff: [
    {
      name: 'Dr. James Ochieng',
      tsc: 'TSC/341829',
      role: 'Chief Principal & Chemistry Lead',
      department: 'Sciences',
      phone: '+254 720 000 111',
      initials: 'JO'
    },
    {
      name: 'Mrs. Agnes Muthoni',
      tsc: 'TSC/412903',
      role: 'Deputy Principal (Academics) & CBC Coordinator',
      department: 'Curriculum & CBC',
      phone: '+254 721 111 222',
      initials: 'AM'
    },
    {
      name: 'Mr. David Kiprop',
      tsc: 'TSC/553210',
      role: 'Senior Master & Mathematics Head',
      department: 'Mathematics',
      phone: '+254 722 222 333',
      initials: 'DK'
    },
    {
      name: 'Ms. Halima Abdi',
      tsc: 'TSC/678901',
      role: 'Head of Languages & Fasihi ya Kiswahili',
      department: 'Languages',
      phone: '+254 723 333 444',
      initials: 'HA'
    }
  ],

  pendingPayment: null
};

// Main App Controller
const app = {
  /**
   * Initialize DOM event listeners and initial renders
   */
  init() {
    this.bindNavigation();
    this.bindSearchAndFilter();
    this.bindModals();
    this.bindMpesaForms();
    this.renderAll();
  },

  /**
   * Re-render all views and synchronized UI elements
   */
  renderAll() {
    this.renderKPIs();
    this.renderStudentsTable();
    this.renderRecentTransactions();
    this.renderFullMpesaTable();
    this.renderCbcRubricTable();
    this.renderStaffGrid();
    this.populateStudentDropdown();
  },

  /**
   * Currency formatter for Kenya Shillings (KSh)
   */
  formatKSh(amount) {
    return 'KSh ' + Number(amount).toLocaleString('en-KE');
  },

  /**
   * Navigation & View Switching
   */
  bindNavigation() {
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const view = item.getAttribute('data-view');
        this.switchView(view);

        // Auto close mobile sidebar
        const sidebar = document.getElementById('sidebar');
        if (sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
        }
      });
    });

    // Mobile sidebar toggle
    const menuBtn = document.getElementById('menuToggleBtn');
    const closeBtn = document.getElementById('sidebarCloseBtn');
    const sidebar = document.getElementById('sidebar');

    if (menuBtn && sidebar) {
      menuBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
      });
    }

    if (closeBtn && sidebar) {
      closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
      });
    }
  },

  /**
   * Switch between Dashboard, Students, Grading, Fees, Staff, and Reports
   */
  switchView(viewId) {
    state.activeView = viewId;

    // Update nav active state
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      if (btn.getAttribute('data-view') === viewId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update view panels
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewId}`);
    if (targetPanel) {
      targetPanel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  /**
   * Update KPI Cards
   */
  renderKPIs() {
    // Total Students
    const totalCountEl = document.getElementById('kpiTotalStudents');
    const studentBadgeEl = document.getElementById('studentCountBadge');
    if (totalCountEl) totalCountEl.textContent = state.students.length.toLocaleString('en-KE');
    if (studentBadgeEl) studentBadgeEl.textContent = state.students.length.toLocaleString('en-KE');

    // Fee Collection Progress
    let totalTarget = 0;
    let totalPaid = 0;
    state.students.forEach(s => {
      totalTarget += s.totalFee;
      totalPaid += s.paidFee;
    });

    const pct = totalTarget > 0 ? Math.round((totalPaid / totalTarget) * 1000) / 10 : 0;
    const feeCollectedEl = document.getElementById('kpiFeeCollected');
    if (feeCollectedEl) feeCollectedEl.textContent = `${pct}%`;
  },

  /**
   * Render Student Directory Table with Filter and Search Support
   */
  renderStudentsTable() {
    const tbody = document.getElementById('studentsTableBody');
    if (!tbody) return;

    const searchTerm = (document.getElementById('directorySearchInput')?.value || '').toLowerCase();
    const gradeFilter = document.getElementById('filterGradeSelect')?.value || 'ALL';
    const feeFilter = document.getElementById('filterFeeStatusSelect')?.value || 'ALL';

    const filtered = state.students.filter(student => {
      const matchSearch =
        student.name.toLowerCase().includes(searchTerm) ||
        student.nemis.toLowerCase().includes(searchTerm) ||
        student.upi.toLowerCase().includes(searchTerm) ||
        student.county.toLowerCase().includes(searchTerm);

      const matchGrade = gradeFilter === 'ALL' || student.grade === gradeFilter;

      const balance = student.totalFee - student.paidFee;
      let matchFee = true;
      if (feeFilter === 'Cleared') matchFee = balance === 0;
      else if (feeFilter === 'Partial') matchFee = balance > 0 && balance <= 10000;
      else if (feeFilter === 'Arrears') matchFee = balance > 10000;

      return matchSearch && matchGrade && matchFee;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 40px; color: var(--slate-400);">
            No student records matching current filters.
          </td>
        </tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(student => {
      const balance = student.totalFee - student.paidFee;
      let badgeClass = 'badge-cleared';
      let badgeText = 'Fee Cleared';

      if (balance > 10000) {
        badgeClass = 'badge-arrears';
        badgeText = 'Arrears';
      } else if (balance > 0) {
        badgeClass = 'badge-partial';
        badgeText = 'Partial';
      }

      const initials = student.name
        .split(',')
        .map(n => n.trim()[0])
        .slice(0, 2)
        .join('');

      return `
        <tr>
          <td>
            <div class="student-cell">
              <div class="student-avatar-cell">${initials}</div>
              <div>
                <span class="student-name-main">${student.name}</span>
                <span class="student-sub-info">KNEC: ${student.assessmentNo}</span>
              </div>
            </div>
          </td>
          <td>
            <strong>${student.upi}</strong>
            <div class="student-sub-info">NEMIS: ${student.nemis}</div>
          </td>
          <td>
            <span class="pill-cbc">${student.grade}</span>
            <div class="student-sub-info">${student.pathway}</div>
          </td>
          <td>
            <span>${student.county}</span>
            <div class="student-sub-info">${student.subCounty}</div>
          </td>
          <td>
            <span class="font-mono">+254 ${student.guardianPhone}</span>
            <div class="student-sub-info">${student.guardianName}</div>
          </td>
          <td>
            <strong class="${balance > 0 ? 'text-danger' : 'text-success'}">
              ${this.formatKSh(balance)}
            </strong>
            <div class="student-sub-info">Paid: ${this.formatKSh(student.paidFee)}</div>
          </td>
          <td>
            <span class="badge ${badgeClass}">${badgeText}</span>
          </td>
          <td>
            <button class="btn btn-outline btn-sm" onclick="app.quickPayForStudent('${student.upi}', ${balance})">
              Pay KSh
            </button>
          </td>
        </tr>
      `;
    }).join('');

    const countText = document.getElementById('tableRecordCountText');
    if (countText) {
      countText.textContent = `Showing ${filtered.length} of ${state.students.length} students`;
    }
  },

  /**
   * CBC Assessment Rubric Matrix Table
   */
  renderCbcRubricTable() {
    const tbody = document.getElementById('cbcRubricTableBody');
    if (!tbody) return;

    tbody.innerHTML = state.students.map(student => {
      const eeActive = student.cbcRating === 'EE' ? 'active-ee' : '';
      const meActive = student.cbcRating === 'ME' ? 'active-me' : '';
      const aeActive = student.cbcRating === 'AE' ? 'active-ae' : '';
      const beActive = student.cbcRating === 'BE' ? 'active-be' : '';

      return `
        <tr>
          <td>
            <strong class="student-name-main">${student.name}</strong>
            <span class="student-sub-info">Assessment No: ${student.assessmentNo}</span>
          </td>
          <td>
            <span class="font-mono font-semibold">${student.upi}</span>
            <div class="student-sub-info">NEMIS: ${student.nemis}</div>
          </td>
          <td class="text-center">
            <div class="rubric-selector-group">
              <button class="rubric-pill-btn ${eeActive}" onclick="app.updateStudentRubric('${student.id}', 'EE', 4)">EE (4)</button>
              <button class="rubric-pill-btn ${meActive}" onclick="app.updateStudentRubric('${student.id}', 'ME', 3)">ME (3)</button>
              <button class="rubric-pill-btn ${aeActive}" onclick="app.updateStudentRubric('${student.id}', 'AE', 2)">AE (2)</button>
              <button class="rubric-pill-btn ${beActive}" onclick="app.updateStudentRubric('${student.id}', 'BE', 1)">BE (1)</button>
            </div>
          </td>
          <td>
            <span style="font-size: 0.8rem; color: var(--slate-600);">${student.cbcComment}</span>
          </td>
          <td>
            <span class="badge badge-success">Synced CBA</span>
          </td>
        </tr>
      `;
    }).join('');
  },

  /**
   * Update student CBC rubric rating
   */
  updateStudentRubric(studentId, rating, score) {
    const student = state.students.find(s => s.id === studentId);
    if (student) {
      student.cbcRating = rating;
      student.cbcScore = score;
      const comments = {
        EE: 'Consistently demonstrates deep analytical mastery beyond curriculum prompt.',
        ME: 'Satisfies target learning criteria accurately and independently.',
        AE: 'Shows emerging grasp; supported by step-by-step facilitation.',
        BE: 'Recommended for guided remedial exercises and teacher mentorship.'
      };
      student.cbcComment = comments[rating] || student.cbcComment;
      this.renderCbcRubricTable();
      this.showToast(`Updated ${student.name} to Rubric Level ${rating} (${score}/4)`, 'info');
    }
  },

  /**
   * Render Recent M-PESA Transactions on Dashboard
   */
  renderRecentTransactions() {
    const tbody = document.getElementById('dashTransactionsBody');
    if (!tbody) return;

    tbody.innerHTML = state.mpesaTransactions.slice(0, 4).map(tx => `
      <tr>
        <td><strong class="font-mono text-navy">${tx.receipt}</strong></td>
        <td>
          <span class="student-name-main">${tx.studentName}</span>
          <span class="student-sub-info">${tx.upi}</span>
        </td>
        <td class="font-mono">${tx.phone}</td>
        <td><strong class="text-emerald">${this.formatKSh(tx.amount)}</strong></td>
        <td>${tx.category}</td>
        <td><span class="badge badge-cleared">${tx.status}</span></td>
        <td class="text-muted">${tx.time}</td>
      </tr>
    `).join('');
  },

  /**
   * Render Full M-PESA Ledger on Fee Management View
   */
  renderFullMpesaTable() {
    const tbody = document.getElementById('fullMpesaTableBody');
    if (!tbody) return;

    tbody.innerHTML = state.mpesaTransactions.map(tx => `
      <tr>
        <td><strong class="font-mono text-navy">${tx.receipt}</strong></td>
        <td>
          <span class="student-name-main">${tx.studentName}</span>
          <span class="student-sub-info">${tx.upi}</span>
        </td>
        <td class="font-mono">${tx.phone}</td>
        <td><strong class="text-emerald">${this.formatKSh(tx.amount)}</strong></td>
        <td>${tx.category}</td>
        <td><span class="badge badge-cleared">${tx.status}</span></td>
        <td class="text-muted">${tx.time}</td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="app.showToast('Official School Receipt Generated for ${tx.receipt}', 'success')">
            Receipt
          </button>
        </td>
      </tr>
    `).join('');
  },

  /**
   * Render Staff Directory Cards
   */
  renderStaffGrid() {
    const container = document.getElementById('staffGridContainer');
    if (!container) return;

    container.innerHTML = state.staff.map(member => `
      <div class="staff-card">
        <div class="staff-avatar">${member.initials}</div>
        <div class="staff-info">
          <h4>${member.name}</h4>
          <span class="tsc-badge">${member.tsc}</span>
          <p class="role-text">${member.role}</p>
          <div class="student-sub-info mt-3">${member.department} Department • ${member.phone}</div>
        </div>
      </div>
    `).join('');
  },

  /**
   * Populate Student Select Dropdown in Fee Management view
   */
  populateStudentDropdown() {
    const select = document.getElementById('stkStudentSelect');
    if (!select) return;

    select.innerHTML = state.students.map(s => {
      const bal = s.totalFee - s.paidFee;
      return `<option value="${s.upi}" data-phone="${s.guardianPhone}" data-balance="${bal}">${s.name} (${s.upi}) - Bal: ${this.formatKSh(bal)}</option>`;
    }).join('');

    // Update phone & ref on select change
    select.addEventListener('change', (e) => {
      const selected = select.options[select.selectedIndex];
      const phoneInput = document.getElementById('stkPhone');
      const accountRef = document.getElementById('stkAccountRef');
      const amountInput = document.getElementById('stkAmount');

      if (phoneInput) phoneInput.value = selected.getAttribute('data-phone') || '712345678';
      if (accountRef) accountRef.value = selected.value;
      const bal = Number(selected.getAttribute('data-balance') || 10000);
      if (amountInput && bal > 0) amountInput.value = bal;
    });
  },

  /**
   * Quick Jump to Pay For Student from Directory
   */
  quickPayForStudent(upi, balance) {
    this.switchView('fees');
    const select = document.getElementById('stkStudentSelect');
    if (select) {
      select.value = upi;
      const event = new Event('change');
      select.dispatchEvent(event);
    }
    const amountInput = document.getElementById('stkAmount');
    if (amountInput && balance > 0) {
      amountInput.value = balance;
    }
  },

  setStkAmount(amount) {
    const amountInput = document.getElementById('stkAmount');
    if (amountInput) amountInput.value = amount;
  },

  /**
   * Event bindings for Filters & Search inputs
   */
  bindSearchAndFilter() {
    const searchInput = document.getElementById('directorySearchInput');
    const gradeSelect = document.getElementById('filterGradeSelect');
    const feeSelect = document.getElementById('filterFeeStatusSelect');
    const topSearch = document.getElementById('topbarSearchInput');

    if (searchInput) {
      searchInput.addEventListener('input', () => this.renderStudentsTable());
    }
    if (gradeSelect) {
      gradeSelect.addEventListener('change', () => this.renderStudentsTable());
    }
    if (feeSelect) {
      feeSelect.addEventListener('change', () => this.renderStudentsTable());
    }

    if (topSearch) {
      topSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.switchView('students');
          if (searchInput) {
            searchInput.value = topSearch.value;
            this.renderStudentsTable();
          }
        }
      });
    }

    const exportBtn = document.getElementById('exportCsvBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        this.showToast('Exported 1,248 student records to CSV (ElimuBora_Registry.csv)', 'success');
      });
    }

    const syncNemis = document.getElementById('quickExportNemisBtn');
    if (syncNemis) {
      syncNemis.addEventListener('click', () => {
        this.showToast('NEMIS API sync successful: 1,248 verified UPIs synchronized with MoE portal.', 'success');
      });
    }

    const saveCbc = document.getElementById('saveCbcRubricBtn');
    if (saveCbc) {
      saveCbc.addEventListener('click', () => {
        this.showToast('CBC Formative Assessment marks saved to KNEC CBA repository.', 'success');
      });
    }

    const exportKnec = document.getElementById('btnExportKNEC');
    if (exportKnec) {
      exportKnec.addEventListener('click', () => {
        this.showToast('Compiled KNEC CBA Excel format for upload to cba.knec.ac.ke', 'info');
      });
    }
  },

  /**
   * Modal Dialogs for Add Student
   */
  bindModals() {
    const addModal = document.getElementById('addStudentModal');
    const openBtns = [
      document.getElementById('openAddStudentModalBtn'),
      document.getElementById('openAddModalDirectBtn')
    ];
    const closeBtns = [
      document.getElementById('closeAddModalBtn'),
      document.getElementById('cancelAddStudentBtn')
    ];

    openBtns.forEach(btn => {
      if (btn && addModal) {
        btn.addEventListener('click', () => {
          addModal.classList.add('active');
        });
      }
    });

    closeBtns.forEach(btn => {
      if (btn && addModal) {
        btn.addEventListener('click', () => {
          addModal.classList.remove('active');
        });
      }
    });

    // Handle Add Student Form Submission
    const addForm = document.getElementById('addStudentForm');
    if (addForm) {
      addForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('modalFullName').value.trim();
        const grade = document.getElementById('modalGrade').value;
        const nemis = document.getElementById('modalNemis').value.trim();
        const upi = document.getElementById('modalUpi').value.trim().toUpperCase();
        const assessmentNo = document.getElementById('modalAssessmentNo').value.trim();
        const county = document.getElementById('modalCounty').value;
        const subCounty = document.getElementById('modalSubCounty').value.trim();
        const guardianName = document.getElementById('modalGuardianName').value.trim();
        const guardianPhone = document.getElementById('modalGuardianPhone').value.trim();
        const totalFee = Number(document.getElementById('modalTermFee').value) || 35000;
        const initialDeposit = Number(document.getElementById('modalInitialDeposit').value) || 0;

        // Check for duplicate UPI
        if (state.students.some(s => s.upi === upi)) {
          this.showToast(`Error: UPI ${upi} already exists in registry!`, 'error');
          return;
        }

        const newStudent = {
          id: `STU-${1000 + state.students.length + 1}`,
          name: fullName,
          nemis: nemis,
          upi: upi,
          assessmentNo: assessmentNo,
          nationalIdBc: `BC-${Math.floor(1000000 + Math.random() * 9000000)}`,
          grade: grade,
          pathway: grade.includes('CBC') ? 'Junior Secondary General' : 'Senior School STEM',
          county: county,
          subCounty: subCounty,
          guardianName: guardianName,
          guardianPhone: guardianPhone,
          totalFee: totalFee,
          paidFee: initialDeposit,
          cbcRating: 'ME',
          cbcScore: 3,
          cbcComment: 'Newly enrolled student. Initial baseline assessment pending.',
          status: 'Active'
        };

        // Prepend to student registry
        state.students.unshift(newStudent);

        // If initial deposit > 0, generate an M-PESA receipt
        if (initialDeposit > 0) {
          const receiptCode = 'QJK' + Math.floor(100000 + Math.random() * 900000) + 'X';
          state.mpesaTransactions.unshift({
            receipt: receiptCode,
            studentName: newStudent.name,
            upi: newStudent.upi,
            phone: `+254 ${guardianPhone}`,
            amount: initialDeposit,
            category: 'Admission Fee Deposit',
            status: 'Completed',
            time: 'Just now'
          });
        }

        this.renderAll();
        addModal.classList.remove('active');
        addForm.reset();

        this.showToast(`Successfully enrolled ${fullName} (UPI: ${upi})`, 'success');
      });
    }
  },

  /**
   * M-PESA Form Submissions & STK Push Simulation
   */
  bindMpesaForms() {
    const quickForm = document.getElementById('quickMpesaForm');
    const fullForm = document.getElementById('fullMpesaForm');
    const mpesaOverlay = document.getElementById('mpesaModalOverlay');
    const btnCancel = document.getElementById('btnStkCancel');
    const btnConfirm = document.getElementById('btnStkConfirm');

    // Quick STK Form on Dashboard
    if (quickForm) {
      quickForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = document.getElementById('quickPhone').value.trim();
        const upi = document.getElementById('quickUpi').value.trim();
        const amount = Number(document.getElementById('quickAmount').value);
        const category = document.getElementById('quickCategory').value;

        this.triggerStkPromptSimulation({
          phone: `+254 ${phone}`,
          account: upi,
          amount: amount,
          category: category
        });
      });
    }

    // Full STK Form on Fee Management page
    if (fullForm) {
      fullForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const select = document.getElementById('stkStudentSelect');
        const phone = document.getElementById('stkPhone').value.trim();
        const amount = Number(document.getElementById('stkAmount').value);
        const account = document.getElementById('stkAccountRef').value;

        const spinner = document.getElementById('stkSpinner');
        const btnText = document.getElementById('stkBtnText');

        if (spinner && btnText) {
          spinner.classList.remove('hidden');
          btnText.textContent = 'Contacting Safaricom Daraja API...';
        }

        setTimeout(() => {
          if (spinner && btnText) {
            spinner.classList.add('hidden');
            btnText.textContent = 'Send STK Push to Parent Device';
          }

          this.triggerStkPromptSimulation({
            phone: `+254 ${phone}`,
            account: account,
            amount: amount,
            category: 'School Term Fees'
          });
        }, 800);
      });
    }

    if (btnCancel && mpesaOverlay) {
      btnCancel.addEventListener('click', () => {
        mpesaOverlay.classList.remove('active');
        this.showToast('M-PESA STK Push cancelled by user.', 'error');
      });
    }

    if (btnConfirm && mpesaOverlay) {
      btnConfirm.addEventListener('click', () => {
        mpesaOverlay.classList.remove('active');
        this.finalizeMpesaTransaction();
      });
    }
  },

  /**
   * Launch Simulated STK Prompt Dialog
   */
  triggerStkPromptSimulation(details) {
    state.pendingPayment = details;

    const modalStkAccount = document.getElementById('modalStkAccount');
    const modalStkAmount = document.getElementById('modalStkAmount');
    const overlay = document.getElementById('mpesaModalOverlay');

    if (modalStkAccount) modalStkAccount.textContent = details.account;
    if (modalStkAmount) modalStkAmount.textContent = this.formatKSh(details.amount);
    if (overlay) overlay.classList.add('active');
  },

  /**
   * Complete the M-PESA STK Push transaction
   */
  finalizeMpesaTransaction() {
    const payment = state.pendingPayment;
    if (!payment) return;

    // Generate random Safaricom Daraja receipt code: e.g. RJK482910M
    const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const receiptCode = 'RJK' + Math.floor(100000 + Math.random() * 900000) + randomLetter;

    // Look for matching student by UPI
    let student = state.students.find(s => s.upi.toUpperCase() === payment.account.toUpperCase());
    let studentName = student ? student.name : 'Learner (' + payment.account + ')';

    if (student) {
      student.paidFee += payment.amount;
    }

    // Record transaction
    const newTx = {
      receipt: receiptCode,
      studentName: studentName,
      upi: payment.account,
      phone: payment.phone,
      amount: payment.amount,
      category: payment.category,
      status: 'Completed',
      time: 'Just now'
    };

    state.mpesaTransactions.unshift(newTx);

    // Re-render
    this.renderAll();

    // Alert toast
    this.showToast(
      `M-PESA STK Push Confirmed! Received ${this.formatKSh(payment.amount)} from ${payment.phone}. Ref: ${receiptCode}`,
      'success'
    );

    state.pendingPayment = null;
  },

  /**
   * Toast notification system
   */
  showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    } else {
      iconSvg = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div>${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
};

// Bootstrap when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});

