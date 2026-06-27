import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/kebijakan-privasi")({
  head: () => ({
    meta: [
      { title: "Kebijakan Privasi — Dapur Planner" },
      {
        name: "description",
        content:
          "Kebijakan privasi Dapur Planner. Aplikasi perencanaan menu mingguan yang berjalan 100% offline tanpa mengumpulkan data pengguna.",
      },
      { property: "og:title", content: "Kebijakan Privasi — Dapur Planner" },
      {
        property: "og:description",
        content:
          "Kebijakan privasi Dapur Planner. Aplikasi perencanaan menu mingguan yang berjalan 100% offline tanpa mengumpulkan data pengguna.",
      },
    ],
  }),
  component: KebijakanPrivasiPage,
});

function KebijakanPrivasiPage() {
  return (
    <PageShell
      title="Kebijakan Privasi"
      right={
        <Link to="/pengaturan" className="p-2 rounded-full hover:bg-accent">
          <ArrowLeft className="h-5 w-5" />
        </Link>
      }
    >
      <div className="rounded-3xl bg-card border border-border p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-accent">
            <Shield className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <h2 className="font-semibold">Privasi Anda penting</h2>
            <p className="text-sm text-muted-foreground">
              Terakhir diperbarui: Juni 2026
            </p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          Halaman ini dikelola oleh pemilik aplikasi Dapur Planner untuk menjawab
          pertanyaan umum seputar privasi aplikasi. Informasi di sini menjelaskan
          praktik aplikasi saat ini dan bukan pernyataan sertifikasi independen.
        </p>
      </div>

      <div className="rounded-3xl bg-card border border-border p-5 space-y-5">
        <section className="space-y-2">
          <h3 className="font-semibold">1. Pengumpulan data</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Dapur Planner tidak meminta login, tidak membuat akun pengguna, dan
            tidak mengumpulkan data pribadi seperti nama, email, nomor telepon, atau
            lokasi. Semua rencana menu, daftar belanja, favorit, dan pengaturan
            dibuat dan disimpan secara lokal di perangkat Anda.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold">2. Penyimpanan data</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Data aplikasi disimpan di dalam penyimpanan lokal perangkat (IndexedDB
            pada WebView Android) milik pengguna. Aplikasi tidak mengirimkan data ke
            server, cloud, atau API eksternal. Kami tidak dapat mengakses data yang
            Anda simpan di perangkat.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold">3. Izin perangkat</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Aplikasi ini tidak meminta izin khusus seperti kamera, mikrofon, kontak,
            atau lokasi. Hanya menggunakan penyimpanan lokal bawaan perangkat untuk
            menyimpan preferensi dan rencana dapur Anda.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold">4. Kuki dan analitik</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Dapur Planner tidak menggunakan kuki pelacakan, tidak menyematkan
            analitik pihak ketiga, dan tidak menampilkan iklan yang memerlukan
            pelacakan perilaku pengguna.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold">5. Pihak ketiga dan pembagian data</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kami tidak membagikan, menjual, atau mentransfer data pengguna kepada
            pihak ketiga karena aplikasi tidak mengumpulkan atau menyimpan data di
            luar perangkat Anda.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold">6. Kontrol pengguna</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Anda memiliki kendali penuh atas data aplikasi. Data dapat dihapus
            dengan menghapus data aplikasi di pengaturan perangkat atau meng-
            uninstall aplikasi Dapur Planner.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold">7. Perubahan kebijakan</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan akan
            dicantumkan di halaman ini bersama tanggal revisi terbaru.
          </p>
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold">8. Kontak</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Jika ada pertanyaan tentang kebijakan privasi ini, silakan hubungi kami
            di{" "}
            <a
              href="mailto:privacy@dapurplanner.app"
              className="text-primary underline"
            >
              privacy@dapurplanner.app
            </a>
            . Ganti alamat email ini dengan kontak aktual sebelum dipublikasikan di
            Google Play.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
