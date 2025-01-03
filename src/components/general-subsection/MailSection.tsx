import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, FileDown } from "lucide-react";
import { useIncomingMails, useOutgoingMails } from "./hooks/useMails";
import { IncomingMailTable } from "./IncomingMailTable";
import { OutgoingMailTable } from "./OutgoingMailTable";
import { AddMailForm } from "./AddMailForm";

export function IncomingMailSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddMailOpen, setIsAddMailOpen] = useState(false);
  const { data: mails = [], isLoading, refetch } = useIncomingMails(searchQuery);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Input
            placeholder="Cari surat masuk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[300px]"
          />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={() => setIsAddMailOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Surat Masuk
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        {isLoading ? (
          <div className="p-8 text-center">Loading...</div>
        ) : (
          <IncomingMailTable mails={mails} />
        )}
      </div>

      <AddMailForm
        type="incoming"
        isOpen={isAddMailOpen}
        onClose={() => setIsAddMailOpen(false)}
        onSuccess={refetch}
      />
    </div>
  );
}

export function OutgoingMailSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddMailOpen, setIsAddMailOpen] = useState(false);
  const { data: mails = [], isLoading, refetch } = useOutgoingMails(searchQuery);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Input
            placeholder="Cari surat keluar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-[300px]"
          />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={() => setIsAddMailOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Surat Keluar
          </Button>
        </div>
      </div>

      <div className="border rounded-lg">
        {isLoading ? (
          <div className="p-8 text-center">Loading...</div>
        ) : (
          <OutgoingMailTable mails={mails} />
        )}
      </div>

      <AddMailForm
        type="outgoing"
        isOpen={isAddMailOpen}
        onClose={() => setIsAddMailOpen(false)}
        onSuccess={refetch}
      />
    </div>
  );
}