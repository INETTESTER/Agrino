import http from 'k6/http';
import { domain, token } from './env.js';

// สุ่มเลขบัตรประชาชนไทย 13 หลัก แบบสมจริง (หลักแรก 1-8) พร้อม check digit ถูกต้อง
function generateThaiID() {
    const firstDigit = Math.floor(Math.random() * 8) + 1; // หลักแรกของบัตร ปชช. จริงคือ 1-8
    const digits = [firstDigit];
    for (let i = 0; i < 11; i++) {
        digits.push(Math.floor(Math.random() * 10));
    }
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += digits[i] * (13 - i);
    }
    const checkDigit = (11 - (sum % 11)) % 10;
    digits.push(checkDigit);
    return digits.join('');
}

export function dispenses(cid) {
    const order_no = __ITER + '' + __VU + '' + cid
    const url = `${domain}/api/v1/integrations/dtam/dispenses`;

    const randomCID = generateThaiID();
    // console.log(`CID_CHECK:${randomCID}`);

    const payload = JSON.stringify({
        order_no: 'DTAM-ADR-20260827-000001' + order_no,
        source_system: 'DTAM_NEXT',
        occurred_at: '2026-08-27T09:30:00+07:00',
        patient: {
            identities: [
                {
                    type: 'THAI_ID',
                    value: randomCID
                }
            ],
            full_name: 'ณรงค์ฤทธิ์ มุณีพรหม',
            phone: '0812345675',
            gender: 'MALE',
            birth_date: '2001-01-01',
            medical_condition: ''
        },
        facility: {
            facility_code: 'M0003',
            facility_name: 'โรงพยาบาลชุมพร',
            facility_type: 'HOSPITAL',
            location: {
                province_name: 'ชุมพร',
                district_name: 'หลังสวน',
                subdistrict_name: ''
            }
        },
        provider: {
            external_provider_id: '1398998226206',
            provider_name: 'ทรัพย์ธนิดา วิเชียรชาญ',
            provider_role: 'พยาบาลวิชาชีพ'
        },
        dispense: {
            product_code: 'CAN-OIL-CBD-003',
            product_name: 'น้ำมันกัญชาทางการแพทย์ สูตร CBD 3',
            lot_batch_number: 'LOT-CBD-202608-001',
            dosage_instruction: 'รับประทานครั้งละ 1 หยด วันละ 2 ครั้ง หลังอาหาร',
            quantity_dispensed: 1,
            quantity_unit: 'bottle',
            total_value: 1250.00,
            dispense_at: '2026-08-26T09:30:00+07:00'
        },
        traceability: {
            cultivation_site_name: 'แปลงปลูกสมุนไพรตัวอย่าง',
            cultivation_area: 12.5,
            cultivation_area_unit: 'rai',
            harvest_at: '2026-05-10T08:30:00+07:00',
            upstream_manufacturer: 'วิสาหกิจชุมชนสมุนไพรตัวอย่าง',
            manufacturer_license_no: 'LIC-CAN-2569-00125',
            midstream_distributor: 'บริษัท สมุนไพรไทย ตัวอย่าง จำกัด',
            warehouse_name: 'คลังเวชภัณฑ์ส่วนกลาง อาคาร 2',
            manufactured_at: '2026-05-20T10:00:00+07:00',
            downstream_dispenser: 'โรงพยาบาลตัวอย่าง',
            standard_ref: 'GACP/GMP',
            source_updated_at: '2026-08-19T09:00:00+07:00'
        }
    });
    const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        timeout: '300s',
    };
    const response = http.post(url, payload, params);
    //console.log(response.body);
    return response;
}