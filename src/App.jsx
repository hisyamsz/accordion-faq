import Accordion from './components/Accordion';

const faqs = [
  {
    question: 'Bagaimana cara menghubungi dukungan pelanggan?',
    answer:
      'Anda dapat menghubungi tim dukungan pelanggan kami melalui telepon di 1-800-123-4567 atau email di support@company.com.',
  },
  {
    question: 'Metode pembayaran apa yang diterima?',
    answer: 'Kami menerima kartu kredit/debit, PayPal, dan transfer bank untuk pembayaran.',
  },
  {
    question: 'Apakah Anda menawarkan pengiriman internasional?',
    answer:
      'Ya, kami menawarkan pengiriman internasional ke banyak negara. Silakan cek kebijakan pengiriman kami untuk informasi lebih lanjut.',
  },
  {
    question: 'Apa kebijakan pengembalian Anda?',
    answer:
      'Kebijakan pengembalian kami memungkinkan pengembalian dalam waktu 30 hari sejak pembelian. Barang harus dalam kondisi baru dan tidak digunakan dengan kemasan asli.',
  },
  {
    question: 'Apakah Anda menawarkan layanan pembungkusan hadiah?',
    answer:
      'Ya, kami menawarkan layanan pembungkusan hadiah dengan biaya tambahan kecil. Anda dapat memilih opsi ini saat checkout.',
  },
  {
    question: 'Apakah ada diskon untuk pesanan dalam jumlah besar?',
    answer:
      'Kami menawarkan diskon untuk pesanan dalam jumlah besar. Silakan hubungi tim penjualan kami untuk informasi lebih lanjut tentang harga grosir.',
  },
  {
    question: 'Bagaimana cara melacak pesanan saya?',
    answer:
      'Anda dapat melacak pesanan Anda dengan masuk ke akun Anda di situs web kami dan melihat status pesanan Anda. Anda juga akan menerima informasi pelacakan melalui email.',
  },
  {
    question: 'Apa kebijakan garansi Anda?',
    answer:
      'Produk kami dilengkapi dengan garansi 1 tahun terhadap cacat manufaktur. Silakan hubungi kami jika Anda mengalami masalah dengan produk Anda.',
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

export default App;
